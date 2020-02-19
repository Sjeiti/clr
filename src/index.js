import clr from './color-js-abridged' // 'color-js'
import './styles.less'

const name = 'mcpicker'
const {body, documentElement:html} = document

body.appendChild(document.createElement('style'))
const sheet = document.styleSheets[document.styleSheets.length - 1]

const popups = new Map()

const px = 'px'
const auto = 'auto'

// Add the click event to document to check all the things
document.addEventListener('click', handleDocumentClick)

/**
 * Handle document click to check if target is an `input[type=color]`
 * @param {MouseEvent} e
 */
function handleDocumentClick(e){
  const {target} = e
  if (target.matches('input[type=color]')){
    e.preventDefault()
    const popup = colorPicker(target)
    removeExcept(popup)
    const rect = target.getBoundingClientRect()

    const {right, bottom, top} = rect
    const {clientX, clientY} = e
    const {documentElement:{scrollTop, clientWidth, clientHeight}} = document
    const partW = clientX/clientWidth
    const partH = clientY/clientHeight

    if (partW<0.5){
      popup.style.left = rect.left+px
      popup.style.right = auto
    } else {
      popup.style.left = auto
      popup.style.right = (clientWidth - right)+px
    }
    if (partH<0.5){
      popup.style.top = (bottom + scrollTop)+px
      popup.style.bottom = auto
    } else {
      popup.style.top = auto
      popup.style.bottom = (clientHeight - top - scrollTop)+px
    }

  } else {
    const clickedPicker = target.closest(`.${name}`)
    !clickedPicker?.contains(target)&&removeExcept()
  }
}

/**
 * Remove elements from DOM except...
 * @param {HTMLElement[]} except
 */
function removeExcept(except){
  [...popups.values()].forEach(elm=>elm!==except&&elm.remove())
}

/**
 * Initialise the color picker for an `input[type=color]`
 * @param {HTMLInputElement} source
 * @return {HTMLElement} the color picker element
 */
function colorPicker(source){
  const openElm = popups.get(source)
  const initialised = !!openElm
  const inDOM = !!openElm?.parentNode
  if (initialised&&inDOM){
    openElm.remove()
  } else if (initialised&&!inDOM){
    body.appendChild(openElm)
  } else {
    const popup = document.createElement('div')
    popup.classList.add(name)
    popups.set(source, popup)

    popup.remove = ()=>{
      dispatch('change')
      Element.prototype.remove.apply(popup)
    }

    const colorElm = append(popup, 'div')
    const hueElm = append(popup, 'div')
    const inputElm = append(popup, 'input')
    inputElm.value = source.value
    const inputRElm = append(popup, 'input')
    const inputGElm = append(popup, 'input')
    const inputBElm = append(popup, 'input')
    const inputRGB = [inputRElm, inputGElm, inputBElm]
    inputRGB.forEach(elm=>{
      elm.type = 'number'
      elm.min = 0
      elm.max = 255
    })

    body.appendChild(popup)

    const className = getClassName(source)
    popup.classList.add(className)

    let color = clr(inputElm.value)
    let hueColor = color.setSaturation(1).setLightness(0.5)

    const baseRule = `.${name}.${className}`
    const rulePicker = getRule(`${baseRule} {}`)
    const ruleColorcolor = getRule(`${baseRule}>div:first-child {}`)
    const ruleColor = getRule(`${baseRule}>div:first-child:after {}`)
    const ruleHue = getRule(`${baseRule}>div:first-child+div:after {}`)
    const ruleInput = getRule(`${baseRule}>input {}`)
    const ruleInputSelection = getRule(`${baseRule}>input::selection {}`)

    colorElm.addEventListener('click', onClickColor)
    hueElm.addEventListener('click', onClickHue)

    colorElm.addEventListener('mousedown', ()=>html.addEventListener('mousemove', onClickColor))
    html.addEventListener('mouseup', ()=>html.removeEventListener('mousemove', onClickColor))
    colorElm.addEventListener('touchstart', ()=>html.addEventListener('touchmove', onClickColor))
    html.addEventListener('touchend', ()=>html.removeEventListener('touchmove', onClickColor))

    hueElm.addEventListener('mousedown', ()=>html.addEventListener('mousemove', onClickHue))
    html.addEventListener('mouseup', ()=>html.removeEventListener('mousemove', onClickHue))
    hueElm.addEventListener('touchstart', ()=>html.addEventListener('touchmove', onClickHue))
    html.addEventListener('touchend', ()=>html.removeEventListener('touchmove', onClickHue))

    inputElm.addEventListener('input', onHexInput)
    inputRGB.forEach(elm=>elm.addEventListener('input', onRGBInput))

    setColors()
    setInputHex()
    setInputRGB()

    /**
     * Append a new element to an existing element
     * @param {HTMLElement} to
     * @param {string} type
     * @return {HTMLElement}
     */
    function append(to, type){
      const elm = document.createElement(type)
      to.appendChild(elm)
      return elm
    }

    /**
     * Create a new stylesheet rule
     * @param {string} rule
     * @return {CSSRule}
     */
    function getRule(rule){
      sheet.insertRule(rule, 0)
      return sheet.rules[0]
    }

    /**
     * Get a unique className
     * @param {HTMLElement} source
     * @return {string}
     */
    function getClassName(source){
      const unique = source.name||source.id||Math.round(Date.now()+Math.random()*1E3).toString(16)
      return `${name}_${unique}`
    }

    /**
     * Click handler for the color gradient
     * @param {MouseEvent} e
     */
    function onClickColor(e){
      const rect = colorElm.getBoundingClientRect()
      const eo = e.touches?.[0]||e
      const x = eo.clientX - rect.left
      const y = eo.clientY - rect.top
      const xpart = partRange(x/rect.width)
      const ypart = partRange(1-y/rect.height)
      color = color.setSaturation(xpart).setValue(ypart)
      setColorPos()
      setBackground()
      setInputHex()
      setInputRGB()
      setSource()
    }

    /**
     * Click handler for the hue gradient
     * @param {MouseEvent} e
     */
    function onClickHue(e){
      const rect = hueElm.getBoundingClientRect()
      const eo = e.touches?.[0]||e
      const x = eo.clientX - rect.left
      const xpart = partRange(x/rect.width)
      const hue = xpart*360
      color = color.setHue(hue)
      hueColor = hueColor.setHue(hue)
      setHuePos()
      setColorHue()
      setBackground()
      setInputHex()
      setInputRGB()
      setSource()
    }

    /**
     * Input handler for the hex text input
     */
    function onHexInput(){
      color = clr(inputElm.value)
      hueColor = color.setSaturation(1).setLightness(0.5)
      setColors()
      setInputRGB()
      setSource()
    }

    /**
     * Input handler for one of the rgb text inputs
     */
    function onRGBInput(){
      color = clr().fromObject(inputRGB.map(m=>m.value))
      hueColor = color.setSaturation(1).setLightness(0.5)
      setColors()
      setInputHex()
      setSource()
    }

    /**
     * Clamp value between 0 and 1
     * @param {number} f
     * @return {number}
     */
    function partRange(f){
      return Math.min(Math.max(f, 0), 1)
    }

    /**
     * Set the color of the color gradient
     */
    function setColorHue(){
      ruleColorcolor.style.background = `linear-gradient(to top, black, rgba(0,0,0,0)),
      linear-gradient(to left, ${hueColor.toString()}, white)`
    }

    /**
     * Set the position of the color gradient
     */
    function setColorPos(){
      const xpart = color.getSaturation()
      const ypart = color.getValue()
      ruleColor.style.left = `${(xpart*100).toFixed(2)}%`
      ruleColor.style.bottom = `${(ypart*100).toFixed(2)}%`
    }

    /**
     * Set the position of the hue gradient
     */
    function setHuePos(){
      const xpart = color.getHue()/360
      ruleHue.style.left = `${(xpart*100).toFixed(2)}%`
    }

    /**
     * Set the back- and foreground color of the input elements
     */
    function setBackground(){
      const isBright = color.getLuminance()>0.5
      rulePicker.style.backgroundColor = color.toString()
      ruleInput.style.color = isBright?'#000':'#FFF'
      ruleInputSelection.style.backgroundColor = isBright
        ?color.lightenByAmount(0.6).toString()
        :color.darkenByAmount(0.4).toString()
    }

    /**
     * Set the value of the hex input
     */
    function setInputHex(){
      inputElm.value = color.toCSS()
    }

    /**
     * Set the value of the rgb inputs
     */
    function setInputRGB(){
      inputRElm.value = Math.round(color.getRed()*255)
      inputGElm.value = Math.round(color.getGreen()*255)
      inputBElm.value = Math.round(color.getBlue()*255)
    }

    /**
     * Set the value of the source `input[type=color]`
     */
    function setSource(){
      source.value = color.toCSS()
      dispatch()
    }

    /**
     * Dispatch the input event on the source `input[type=color]`
     * @param {string} type
     */
    function dispatch(type='input'){
      const event = document.createEvent('HTMLEvents')
      event.initEvent(type, true, false)
      source.dispatchEvent(event)
    }

    /**
     * Set all the colors
     */
    function setColors(){
      setHuePos()
      setColorHue()
      setColorPos()
      setBackground()
    }
  }
  return popups.get(source)
}