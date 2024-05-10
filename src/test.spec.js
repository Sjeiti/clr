const { test, expect } = require('@playwright/test')
const {color} = require('./color')

const root = 'http://localhost:5132/test.html'

const mcpicker = '.mcpicker'
const instance1 = 'mcpicker_g1'

const tab = 'Tab'
const selectAll = 'Control+a'
const colorValue1 = '#FF0044'

const rx = s => new RegExp(s)

test.describe('MC Picker', () => {
  let color1, color2, mcpicker1, inputHex, inputR, inputG, inputB, gradient, huey, expectRGB, typeRGB

  test.beforeEach(async({ page }) => {
    page.setViewportSize({ width: 320, height: 240 })
    await page.goto(root)
    mcpicker1 = page.locator(mcpicker)
    color1 = page.locator('#g1')
    color2 = page.locator('#g2')
    const inputs = mcpicker1.locator('input')
    inputHex = inputs.first()
    inputR = inputs.nth(1)
    inputG = inputs.nth(2)
    inputB = inputs.nth(3)
    gradient = mcpicker1.locator('div:first-child')
    huey = mcpicker1.locator('div+div')
    expectRGB = async(r, g, b)=>{
      await expect(inputR).toHaveJSProperty('valueAsNumber', r)
      await expect(inputG).toHaveJSProperty('valueAsNumber', g)
      await expect(inputB).toHaveJSProperty('valueAsNumber', b)
    }
    typeRGB = async(keyboard, r, g, b)=>{
      await inputR.focus()
      await keyboard.press(selectAll)
      await keyboard.type(r.toString())
      await keyboard.press(tab)
      await keyboard.type(g.toString())
      await keyboard.press(tab)
      await keyboard.type(b.toString())
    }
  })

  test('should open when clicking `input[type=color]`', async() => {
    await expect(mcpicker1).toHaveCount(0)
    await color1.click()
    await expect(mcpicker1).toHaveCount(1)
    await expect(mcpicker1).toHaveClass(rx(instance1))
  })

  test('should only open one instance', async() => {
    await expect(mcpicker1).toHaveCount(0)
    await color1.click()
    await expect(mcpicker1).toHaveCount(1)
    await color2.click()
    await expect(mcpicker1).toHaveCount(1)
    await expect(mcpicker1).not.toHaveClass(instance1)
  })

  test('should contain input value', async() => {
    await color1.click()
    const colorValue = (await color1.inputValue()).toUpperCase()
    await expect(inputHex).toHaveValue(colorValue)
  })

  test('should contain corresponding rgb values', async() => {
    await color1.click()
    const colorValue = (await color1.inputValue()).toUpperCase()
    const {r, g, b} = color(colorValue)
    await expectRGB(r, g, b)
  })

  test('should have correct tab order', async({ page: {keyboard} }) => {
    await color1.click()
    await expect(inputHex).toBeFocused()
    await ['255', '0', '68'].reduce((p, nr) => p.then(async()=>{
      await keyboard.press(tab)
      await keyboard.type(nr)
    }), Promise.resolve())
    await expect(inputHex).toHaveValue(colorValue1)
  })

  test('should react to typing hex values', async({ page: {keyboard} }) => {
    await color1.click()
    await [
        ['F04', [255, 0, 68]]
        , ['#4400FF', [68, 0, 255]]
        , ['#', [NaN, NaN, NaN]]
    ].reduce((p, [string, rgb]) => p.then(async()=>{
      await keyboard.press(selectAll)
      await keyboard.type(string)
      await expectRGB(...rgb)
    }), Promise.resolve())
  })

  test('should react to typing rgb values', async({ page: {keyboard} }) => {
    await color1.click()
    await[
      [[255, 0, 68], '#FF0044']
      , [[68, 0, 255], '#4400FF']
      , [['9e9', '-8', 68], '#FF0044']
    ].reduce((p, [rgb, colorValue]) => p.then(async()=>{
      await typeRGB(keyboard, ...rgb)
      await expect(inputHex).toHaveValue(colorValue)
    }), Promise.resolve())
  })

  test('should react to clicking', async({ page: {mouse} }) => {
    await color2.click()
    await expect(mcpicker1).toHaveCount(1)
    const gradientBox = await gradient.boundingBox()
    const hueyBox = await huey.boundingBox()
    await mouse.click(gradientBox.x + gradientBox.width - 1,  gradientBox.y, {delay: 40})
    await mouse.click(hueyBox.x + 0.9556*hueyBox.width,  hueyBox.y + 5, {delay: 40})
    await expect(inputHex).toHaveValue('#FF0044')
  })

  test('should react to dragging mouse', async({ page: {mouse} }) => {
    await color1.click()
    await expect(mcpicker1).toHaveCount(1)

    const {width:w, height:h, x, y} = await gradient.boundingBox()
    await mouse.move(x + 0.5*w, y + 0.5*h)
    await mouse.down()
    await mouse.move(x + 1.2*w, y - 20)
    await mouse.up()

    const {width:hw, height:hh, x:hx, y:hy} = await huey.boundingBox()
    await mouse.move(hx + 0.5*hw, hy + 0.5*hh)
    await mouse.down()
    await mouse.move(hx + 0.9556*hw, hy + 0.5*hh)
    await mouse.up()

    await mouse.move(hx + 0.5*hw, hy + 0.5*hh)
    await mouse.down()
    await mouse.move(hx + -0.2*hw, hy + 50)
    await mouse.up()

    await expect(inputHex).toHaveValue('#FF0000')
  })

  test('should reflect current state as background-color', async({ page: {keyboard} }) => {
    await color2.click()
    await expect(mcpicker1).toHaveCSS('background-color', 'rgb(0, 68, 255)')
    await keyboard.press(selectAll)
    await keyboard.type('F04')
    await expect(mcpicker1).toHaveCSS('background-color', 'rgb(255, 0, 68)')
  })


  // todo fix test
  test.skip('should work with custom css', async({ page, page: {keyboard} }) => {
    //
    await page.addInitScript(async(window)=>{
      window.console.log('addInitScript', window) // todo: remove log
      const {document} = window
      const style = document.createElement('style')
      style.appendChild(document.createTextNode(`
          .mcpicker { width: 20rem; height: 20rem; }
          .mcpicker > div:first-child { height: calc(100% - 5rem); }
          .mcpicker > div:first-child + div { height: 2rem; }
          .mcpicker input { height: 3rem; }
      `))
      // style.textContent = `
      //     .mcpicker { width: 20rem; height: 20rem; }
      //     .mcpicker > div:first-child { height: calc(100% - 5rem); }
      //     .mcpicker > div:first-child + div { height: 2rem; }
      //     .mcpicker input { height: 3rem; }
      // `
      // style.styleSheet.cssText = `
      //     .mcpicker { width: 20rem; height: 20rem; }
      //     .mcpicker > div:first-child { height: calc(100% - 5rem); }
      //     .mcpicker > div:first-child + div { height: 2rem; }
      //     .mcpicker input { height: 3rem; }
      // `
      document.body.appendChild(style)
    })
    //
    await color2.click()
    await keyboard.press(selectAll)
    await keyboard.type('F04')
    await expect(mcpicker1).toHaveCSS('background-color', 'rgb(255, 0, 68)')
    await ['68', '0', '255'].reduce((p, nr) => p.then(async()=>{
      await keyboard.press(tab)
      await keyboard.type(nr)
    }), Promise.resolve())
    await expect(inputHex).toHaveValue('#4400FF')
  })
})
