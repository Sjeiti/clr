const { test, expect } = require('@playwright/test')

const root = 'http://localhost:5132/test.html'
const color1 = '#FF0044'
const color2 = '#0044FF'

test('open mc picker by click', async({ page }) => {
  await page.goto(root)

  const input1 = page.locator('#g1')
  const input2 = page.locator('#g2')
  const picker1 = page.locator('.mcpicker')
  const inputs = picker1.locator('input')
  const inputHex = inputs.first()
  const inputR = inputs.nth(1)
  const inputG = inputs.nth(2)
  const inputB = inputs.nth(3)

  await input1.click()

  await expect(picker1).toBeVisible()

  await expect(inputHex).toHaveValue(color1)
  await expect(inputR).toHaveValue('255')
  await expect(inputG).toHaveValue('0')
  await expect(inputB).toHaveValue('68')

  await input2.click()
  await expect(inputHex).not.toHaveValue(color1)
  await expect(inputHex).toHaveValue(color2)

})
