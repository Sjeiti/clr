import clr from 'color-js'
import './styles.scss'

const styleElm = document.createElement('style')
document.body.appendChild(styleElm)
const sheet = document.styleSheets[document.styleSheets.length - 1]

const {documentElement:html} = document

const popups = new Map()

document.addEventListener('click', e=>{
  const {target} = e
  if (target.matches('input[type=color]')) {
    e.preventDefault()
    colorPicker(target)
  } else {
    console.log(popups)
    popups.values().forEach(elm=>elm.parentNode.removeChild(elm))
    popups.values().forEach(elm=>console.log(elm))
  }
})

function colorPicker(source){
  
  const openElm = popups.get(source)
  if (openElm&&openElm.parentNode) {
    openElm.parentNode.remove(openElm)
    
  } else {

  const popup = document.createElement('div')
  popup.classList.add('picker')
  popups.set(source, popup)

  const colorElm = append(popup, 'div')
  const hueElm = append(popup, 'div')
  const inputElm = append(popup, 'input')
  inputElm.value = source.value
  const inputRElm = append(popup, 'input')
  const inputGElm = append(popup, 'input')
  const inputBElm = append(popup, 'input')
  const inputRGB = [inputRElm,inputGElm,inputBElm]
  inputRGB.forEach(elm=>elm.type='number')

  document.body.appendChild(popup)
  //source.documentElement.body.appendChild(popup)

  const className = getClassName()
  popup.classList.add(className)

  let color = clr(inputElm.value)
  let hueColor = color.setSaturation(1).setLightness(0.5)

  const baseRule = `.picker.${className}`
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

  hueElm.addEventListener('mousedown', ()=>html.addEventListener('mousemove', onClickHue))
  html.addEventListener('mouseup', ()=>html.removeEventListener('mousemove', onClickHue))

  inputElm.addEventListener('input', onHexInput)
  ;inputRGB.forEach(elm=>elm.addEventListener('input', onRGBInput))

  setColors()
  setInputHex()
  setInputRGB()

  function append(to, type){
    const elm = document.createElement(type)
    to.appendChild(elm)
    return elm
  }

  function getRule(rule){
    sheet.insertRule(rule, 0)
    return sheet.rules[0]
  }

  function getClassName(){
    return 'signal'+Math.round(Date.now()+Math.random()*1E3).toString(16)
  }
  
  function onClickColor(e){
    const rect = colorElm.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xpart = partRange(x/rect.width)
    const ypart = partRange(1-y/rect.height)
    color = color.setSaturation(xpart).setValue(ypart)
    setColorPos()
    setBackground()
    setInputHex()
    setInputRGB()
  }
  
  function onClickHue(e){
    const rect = hueElm.getBoundingClientRect()
    const x = e.clientX - rect.left
    const xpart = partRange(x/rect.width)
    const hue = xpart*360
    color = color.setHue(hue)
    hueColor = hueColor.setHue(hue)
    setHuePos()
    setColorHue()
    setBackground()
    setInputHex()
    setInputRGB()
  }

  function onHexInput(){
    color = clr(inputElm.value)
    hueColor = color.setSaturation(1).setLightness(0.5)
    setColors()
    setInputRGB()
  }

  function onRGBInput(){
    color = clr().fromObject(inputRGB.map(m=>m.value))
    hueColor = color.setSaturation(1).setLightness(0.5)
    setColors()
    setInputHex()
  }

  function partRange(f) {
    return Math.min(Math.max(f,0),1)
  }

  function setColorHue(){
    ruleColorcolor.style.background = `linear-gradient(to top, black, rgba(0,0,0,0)),
    linear-gradient(to left, ${hueColor.toString()}, white)`
  }

  function setColorPos(){
    const xpart = color.getSaturation()
    const ypart = color.getValue()
    ruleColor.style.left = `${(xpart*100).toFixed(2)}%`
    ruleColor.style.bottom = `${(ypart*100).toFixed(2)}%`
  }

  function setHuePos(){
    const xpart = color.getHue()/360
    ruleHue.style.left = `${(xpart*100).toFixed(2)}%`
  }

  function setBackground(){
    const isBright = color.getLuminance()>0.5
    rulePicker.style.backgroundColor = color.toString()
    ruleInput.style.color = isBright?'#000':'#FFF'
    ruleInputSelection.style.backgroundColor = isBright
      ?color.lightenByAmount(0.6).toString()
      :color.darkenByAmount(0.4).toString()
    //ruleInputSelection.style.backgroundColor = color
    //  .setHue((color.getHue()+180)%360)
    //  .setLightness(1-color.getLightness())
  }

  function setInputHex(){
    source.value = inputElm.value = color.toCSS()
  }

  function setInputRGB(){
    inputRElm.value = Math.round(color.getRed()*255)
    inputGElm.value = Math.round(color.getGreen()*255)
    inputBElm.value = Math.round(color.getBlue()*255)
  }

  function setColors(){
    setHuePos()
    setColorHue()
    setColorPos()
    setBackground()
  }
  }
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/*
Array.from(document.querySelectorAll('.picker')).forEach(elm=>{

  const popup = document.createElement('div')

  const frag = document.createDocumentFragment()
  const colorElm = append(frag, 'div')
  const hueElm = append(frag, 'div')
  const inputElm = append(frag, 'input')
  inputElm.value = elm.dataset.value
  const inputRElm = append(frag, 'input')
  const inputGElm = append(frag, 'input')
  const inputBElm = append(frag, 'input')
  const inputRGB = [inputRElm,inputGElm,inputBElm]
  inputRGB.forEach(elm=>elm.type='number')
  elm.appendChild(frag)

  const className = getClassName()
  elm.classList.add(className)

  let color = clr(inputElm.value)
  let hueColor = color.setSaturation(1).setLightness(0.5)

  const baseRule = `.picker.${className}`
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

  hueElm.addEventListener('mousedown', ()=>html.addEventListener('mousemove', onClickHue))
  html.addEventListener('mouseup', ()=>html.removeEventListener('mousemove', onClickHue))

  inputElm.addEventListener('input', onHexInput)
  ;inputRGB.forEach(elm=>elm.addEventListener('input', onRGBInput))

  setColors()
  setInputHex()
  setInputRGB()

  function append(to, type){
    const elm = document.createElement(type)
    to.appendChild(elm)
    return elm
  }

  function getRule(rule){
    sheet.insertRule(rule, 0)
    return sheet.rules[0]
  }

  function getClassName(){
    return 'signal'+Math.round(Date.now()+Math.random()*1E3).toString(16)
  }
  
  function onClickColor(e){
    const rect = colorElm.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xpart = partRange(x/rect.width)
    const ypart = partRange(1-y/rect.height)
    color = color.setSaturation(xpart).setValue(ypart)
    setColorPos()
    setBackground()
    setInputHex()
    setInputRGB()
  }
  
  function onClickHue(e){
    const rect = hueElm.getBoundingClientRect()
    const x = e.clientX - rect.left
    const xpart = partRange(x/rect.width)
    const hue = xpart*360
    color = color.setHue(hue)
    hueColor = hueColor.setHue(hue)
    setHuePos()
    setColorHue()
    setBackground()
    setInputHex()
    setInputRGB()
  }

  function onHexInput(){
    color = clr(inputElm.value)
    hueColor = color.setSaturation(1).setLightness(0.5)
    setColors()
    setInputRGB()
  }

  function onRGBInput(){
    color = clr().fromObject(inputRGB.map(m=>m.value))
    hueColor = color.setSaturation(1).setLightness(0.5)
    setColors()
    setInputHex()
  }

  function partRange(f) {
    return Math.min(Math.max(f,0),1)
  }

  function setColorHue(){
    ruleColorcolor.style.background = `linear-gradient(to top, black, rgba(0,0,0,0)),
    linear-gradient(to left, ${hueColor.toString()}, white)`
  }

  function setColorPos(){
    const xpart = color.getSaturation()
    const ypart = color.getValue()
    ruleColor.style.left = `${(xpart*100).toFixed(2)}%`
    ruleColor.style.bottom = `${(ypart*100).toFixed(2)}%`
  }

  function setHuePos(){
    const xpart = color.getHue()/360
    ruleHue.style.left = `${(xpart*100).toFixed(2)}%`
  }

  function setBackground(){
    const isBright = color.getLuminance()>0.5
    rulePicker.style.backgroundColor = color.toString()
    ruleInput.style.color = isBright?'#000':'#FFF'
    ruleInputSelection.style.backgroundColor = isBright
      ?color.lightenByAmount(0.6).toString()
      :color.darkenByAmount(0.4).toString()
    //ruleInputSelection.style.backgroundColor = color
    //  .setHue((color.getHue()+180)%360)
    //  .setLightness(1-color.getLightness())
  }

  function setInputHex(){
    inputElm.value = color.toCSS()
  }

  function setInputRGB(){
    inputRElm.value = Math.round(color.getRed()*255)
    inputGElm.value = Math.round(color.getGreen()*255)
    inputBElm.value = Math.round(color.getBlue()*255)
  }

  function setColors(){
    setHuePos()
    setColorHue()
    setColorPos()
    setBackground()
  }
})*/