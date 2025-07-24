import './styles.css'
import {color} from './color'

const name = 'mcpicker'
const {body, documentElement:html} = document

const style = document.createElement('style')
style.appendChild(document.createComment(name+' '+_VERSION))
body.appendChild(style)
const sheet = document.styleSheets[document.styleSheets.length - 1]

const pickers = globalThis.pickers = new Map()

const px = 'px'
const auto = 'auto'
const click = 'click'
const mousedown = 'mousedown'
const mouseup = 'mouseup'
const mousemove = 'mousemove'
const resize = 'resize'
const touchstart = 'touchstart'
const touchend = 'touchend'
const touchmove = 'touchmove'
const change = 'change'
const div = 'div'
const input = 'input'

// Add the click event to document to check all the things
document.addEventListener(click, handleDocumentClick)

window.addEventListener(resize, handleDocumentResize)

let lastEvent

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
    const {clientX, clientY} = e
    alignPopupToSource(popup, target, clientX, clientY)
  } else if (lastEvent==='click'){
    const clickedPicker = target.closest(`.${name}`)
    !clickedPicker?.contains(target)&&removeExcept()
  }
  lastEvent = e.type
}

function alignPopupToSource(popup, source, clientX=0, clientY=0){

  if (!source) {
    const obj = Array.from(pickers.values()).find(o=>o.popup===popup)
    source = obj.source
  }

  const rect = source.getBoundingClientRect()

  const {right, bottom, top} = rect
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
}

/**
 * Check position on resize (mobile keyboard may cause)
 */
function handleDocumentResize(){
  colorPicker()
}

/**
 * Remove elements from DOM except...
 * @param {HTMLElement[]} except
 */
function removeExcept(except){
  [...pickers.values()].forEach(({popup})=>popup!==except&&popup.remove())
}

/**
 */
function getOpenPicker(){
  return [...pickers.values()].find(({popup})=>popup?.parentNode!==null)
}

/**
 * Initialise the color picker for an `input[type=color]`
 * @param {HTMLInputElement} source
 * @return {HTMLElement} the color picker element
 */
function colorPicker(source){
  const openPicker = source
    ?pickers.get(source)
    :getOpenPicker()
  const {popup:openElm, showPopup} = openPicker||{}
  const initialised = openPicker!==undefined
  const inDOM = openElm?.parentNode!==null
  if (initialised&&inDOM){
    source
      ?openElm.remove()
      :alignPopupToSource(openElm)
  } else if (initialised&&!inDOM){
    showPopup()
  } else if (source) {
    const hasAlpha = !!source?.dataset.hasOwnProperty('alpha')
    const popup = document.createElement(div)
    popup.classList.add(name)
    hasAlpha&&popup.classList.add(name+'--alpha')

    popup.remove = ()=>{
      dispatch(change)
      Element.prototype.remove.apply(popup)
    }

    const colorElm = append(popup, div)
    const hueElm = append(popup, div)
    const alphaElm = hasAlpha&&append(popup, div)||document.createElement(div)
    const inputElm = append(popup, input)
    inputElm.value = source.value
    inputElm.maxLength = hasAlpha?9:7
    const inputRGBA = [
      append(popup, input), 
      append(popup, input), 
      append(popup, input),
      ...hasAlpha?[append(popup, input)]:[]
    ]
    inputRGBA.forEach(elm=>elm.type = 'number')

    showPopup()

    const className = getClassName(source)
    popup.classList.add(className)

    const colorInst = color(inputElm.value)
    hasAlpha&&(colorInst.a = parseInt(source.dataset.alpha, 10))
    const hueInst = colorInst.clone().setSL(1, 0.5)

    pickers.set(source, {popup, showPopup, source, color: colorInst})
    source.color = colorInst

    const baseRule = `.${name}.${className}`
    const rulePicker = getRule(`${baseRule} {}`)
    const ruleColorcolor = getRule(`${baseRule} div:first-child {}`)
    const ruleColor = getRule(`${baseRule} div:first-child:after {}`)
    const ruleHue = getRule(`${baseRule} div+div:after {}`)
    const ruleAlpha = getRule(`${baseRule} div+div+div:after {}`)
    const ruleInput = getRule(`${baseRule} input {}`)
    const ruleNumber = getRule(`${baseRule} input[type=number] {}`)
    const ruleInputSelection = getRule(`${baseRule}>input::selection {}`)

    colorElm.addEventListener(click, onClickColor)
    hueElm.addEventListener(click, onClickHue)

    const events = [
      [mousedown, mouseup, mousemove]
      , [touchstart, touchend, touchmove]
    ]
    ;[
      [colorElm, onClickColor]
      , [hueElm, onClickHue]
      , [alphaElm, onClickAlpha]
    ].forEach(([elm, onClick])=>{
      events.forEach(([start, end, move])=>{
        const onClickBound = onClickRange.bind(this, elm)
        elm.addEventListener(start, e=>{
          onClickBound(e)
          html.addEventListener(move, onClickBound)
          //onClick(e)
          //html.addEventListener(move, onClick)
          e.preventDefault()
        })
        html.addEventListener(end, ()=>html.removeEventListener(move, onClickBound))
        //html.addEventListener(end, ()=>html.removeEventListener(move, onClick))
      })
    })

    inputElm.addEventListener(input, onHexInput)
    inputRGBA.forEach(elm=>elm.addEventListener(input, onRGBInput))

    setColors()
    setInputHex()
    setInputRGB()
    setAlphaPos()

    /**
     * Add popup to DOM and set focus
     */
    function showPopup(){
      body.appendChild(popup)
      inputElm.focus()
    }

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
     * Click handler for the three ranges: color, huey and alpha.
     * @param {HTMLElement} elm
     * @param {MouseEvent} e
     */
    function onClickRange(elm, e){
      console.log('onClickRange')
      const rect = elm.getBoundingClientRect()
      const eo = e.touches?.[0]||e
      const x = eo.clientX - rect.left
      const y = eo.clientY - rect.top
      const xpart = partRange(x/rect.width)
      const ypart = partRange(1-y/rect.height)
      if (elm===colorElm){
        colorInst.setSV(xpart, ypart)
        setColorPos()
        setBackground()
      } else if (elm===hueElm){
        colorInst.setH(xpart)
        hueInst.setH(xpart)
        setHuePos()
        setColorHue()
        setBackground()
      } else if (elm===alphaElm){
        colorInst.a = ypart*255<<0 
        setAlphaPos()
      }
      setInputHex()
      setInputRGB()
      setSource()
      lastEvent = e.type
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
      colorInst.setSV(xpart, ypart)
      setColorPos()
      setBackground()
      setInputHex()
      setInputRGB()
      setSource()
      lastEvent = e.type
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
      colorInst.setH(xpart)
      hueInst.setH(xpart)
      setHuePos()
      setColorHue()
      setBackground()
      setInputHex()
      setInputRGB()
      setSource()
      lastEvent = e.type
    }

    /**
     * Click handler for the alpha range
     * @param {MouseEvent} e
     */
    function onClickAlpha(e){
      const rect = alphaElm.getBoundingClientRect()
      const eo = e.touches?.[0]||e
      const y = eo.clientY - rect.top
      const ypart = partRange(1-y/rect.height)
      colorInst.a = ypart*255<<0 
      setAlphaPos()
      setInputHex()
      setInputRGB()
      setSource()
      lastEvent = e.type
    }

    /**
     * Input handler for the hex text input
     */
    function onHexInput(){
      colorInst.setHex(inputElm.value)
      const {r,g,b,a} = colorInst
      hueInst.setRGB(r,g,b,a).setSL(1, 0.5)
      setColors()
      setInputRGB()
      setAlphaPos()
      setSource()
    }

    /**
     * Input handler for one of the rgb text inputs
     * @param {event} e
     */
    function onRGBInput(e){
      const {target, target:{value}} = e
      if (value<0) target.value = 0
      else if (value>255) target.value = 255
      const {r,g,b,a} = colorInst.setRGB(...inputRGBA.map(m=>parseInt(m.value, 10)))
      hueInst.setRGB(r,g,b,a).setSL(1, 0.5)
      //hueInst = colorInst.clone().setSL(1, 0.5)
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
      linear-gradient(to left, ${hueInst.hex}, white)`
    }

    /**
     * Set the position of the color gradient
     */
    function setColorPos(){
      const xpart = colorInst.s
      const ypart = colorInst.v
      ruleColor.style.left = `${(xpart*100).toFixed(2)}%`
      ruleColor.style.bottom = `${(ypart*100).toFixed(2)}%`
    }

    /**
     * Set the position of the hue gradient
     */
    function setHuePos(){
      const xpart = colorInst.h
      ruleHue.style.left = `${(xpart*100).toFixed(2)}%`
    }

    /**
     * Set the position of the alpha range
     */
    function setAlphaPos(){
      const ypart = 1 - colorInst.a/255
      ruleAlpha.style.left = 'initial'
      ruleAlpha.style.top = `${(ypart*100).toFixed(2)}%`
    }

    /**
     * Set the back- and foreground color of the input elements
     */
    function setBackground(){
      const isBright = colorInst.luminance>0.5
      rulePicker.style.setProperty('--mcp-color', colorInst.hexflat)//'#f04'//color(255-b, 255-r, 255-g).hexflat
      ruleInput.style.color = isBright?'#000':'#FFF'
      ruleNumber.style.boxShadow = `1px 0 0 rgba(${isBright?'0,0,0,0.3':'255,255,255,0.5'}) inset`
      const {r, g, b} = colorInst
      ruleInputSelection.style.backgroundColor = color(255-b, 255-r, 255-g).hexflat
    }

    /**
     * Set the value of the hex input
     */
    function setInputHex(){
      inputElm.value = colorInst.hex
    }

    /**
     * Set the value of the rgb inputs
     */
    function setInputRGB(){
      inputRGBA.forEach(
        (input, i) => input.value = Math.round(colorInst[['r','g','b','a'][i]])
      )
    }

    /**
     * Set the value of the source `input[type=color]`
     */
    function setSource(){
      source.value = colorInst.hexflat
      hasAlpha&&(source.dataset.alpha = colorInst.a)
      dispatch()
    }

    /**
     * Dispatch the input event on the source `input[type=color]`
     * @param {string} type
     */
    function dispatch(type=input){
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
  return pickers.get(source)?.popup
}
