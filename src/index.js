import './styles.less'
import {color} from './color'

// const version = '_VERSION'
const name = 'mcpicker'
const {body, documentElement:html} = document

body.appendChild(document.createElement('style'))
const sheet = document.styleSheets[document.styleSheets.length - 1]

const popups = new Map()

const px = 'px'
const auto = 'auto'
const click = 'click'
const mousedown = 'mousedown'
const mouseup = 'mouseup'
const mousemove = 'mousemove'
const touchstart = 'touchstart'
const touchend = 'touchend'
const touchmove = 'touchmove'
const change = 'change'
const div = 'div'
const input = 'input'

// Add the click event to document to check all the things
document.addEventListener(click, handleDocumentClick)

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

  } else if (lastEvent==='click'){
    const clickedPicker = target.closest(`.${name}`)
    !clickedPicker?.contains(target)&&removeExcept()
  }
  lastEvent = e.type
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
    const popup = document.createElement(div)
    popup.classList.add(name)
    popups.set(source, popup)

    popup.remove = ()=>{
      dispatch(change)
      Element.prototype.remove.apply(popup)
    }

    const colorElm = append(popup, div)
    const hueElm = append(popup, div)
    const inputElm = append(popup, input)
    inputElm.value = source.value
    inputElm.maxLength = 7
    const inputRElm = append(popup, input)
    const inputGElm = append(popup, input)
    const inputBElm = append(popup, input)
    const inputRGB = [inputRElm, inputGElm, inputBElm]
    inputRGB.forEach(elm=>elm.type = 'number')

    body.appendChild(popup)

    const className = getClassName(source)
    popup.classList.add(className)

    let colorInst = color(inputElm.value)
    let hueInst = colorInst.clone().setSL(1, 0.5)

    const baseRule = `.${name}.${className}`
    const rulePicker = getRule(`${baseRule} {}`)
    const ruleColorcolor = getRule(`${baseRule}>div:first-child {}`)
    const ruleColor = getRule(`${baseRule}>div:first-child:after {}`)
    const ruleHue = getRule(`${baseRule}>div:first-child+div:after {}`)
    const ruleInput = getRule(`${baseRule}>input {}`)
    const ruleNumber = getRule(`${baseRule}>input[type=number] {}`)
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
    ].forEach(([elm, onClick])=>{
      events.forEach(([start, end, move])=>{
        elm.addEventListener(start, e=>{
          html.addEventListener(move, onClick)
          e.preventDefault()
        })
        html.addEventListener(end, ()=>html.removeEventListener(move, onClick))
      })
    })

    inputElm.addEventListener(input, onHexInput)
    inputRGB.forEach(elm=>elm.addEventListener(input, onRGBInput))

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
     * Input handler for the hex text input
     */
    function onHexInput(){
      colorInst = color(inputElm.value)
      hueInst = colorInst.clone().setSL(1, 0.5)
      setColors()
      setInputRGB()
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
      colorInst.setRGB(...inputRGB.map(m=>parseInt(m.value, 10)))
      hueInst = colorInst.clone().setSL(1, 0.5)
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
     * Set the back- and foreground color of the input elements
     */
    function setBackground(){
      const isBright = colorInst.luminance>0.5
      rulePicker.style.backgroundColor = colorInst.hex
      ruleInput.style.color = isBright?'#000':'#FFF'
      ruleNumber.style.boxShadow = `1px 0 0 rgba(${isBright?'0,0,0,0.3':'255,255,255,0.5'}) inset`
      const {r, g, b} = colorInst
      ruleInputSelection.style.backgroundColor = color(255-b, 255-r, 255-g).hex
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
      inputRElm.value = Math.round(colorInst.r)
      inputGElm.value = Math.round(colorInst.g)
      inputBElm.value = Math.round(colorInst.b)
    }

    /**
     * Set the value of the source `input[type=color]`
     */
    function setSource(){
      source.value = colorInst.hex
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
  return popups.get(source)
}
