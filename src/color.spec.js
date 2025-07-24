
import { color } from './color'

const perMille = n => n * 1000 << 0

describe('color', () => {

  // initialization

  test('should have prototype', () => {
    expect(color('F04').__proto__).toBe(color('40F').__proto__)
  })

  test('should initialise with single param hex values', () => {
    expect(color('F04').hex).toBe('#FF0044')
    expect(color('#F04').hex).toBe('#FF0044')
    expect(color('FF0044').hex).toBe('#FF0044')
    expect(color('#FF0044').hex).toBe('#FF0044')
    expect(color('F04', 128).hex).toBeUndefined()
    expect(color('F048').hex).toBe('#FF004488')
    expect(color('#FF004488').hex).toBe('#FF004488')
    expect(color('#FF0044FF').hex).toBe('#FF0044')
  })

  test('should initialise with rgb values', () => {
    expect(color(255, 0, 68).hex).toBe('#FF0044')
    expect(color(255, 0, 68, 255).hex).toBe('#FF0044')
    expect(color(255, 0, 68, 128).hex).toBe('#FF004480')
    expect(color(255, 0).hex).toBeUndefined()
    expect(color(255).hex).toBeUndefined()
    expect(color(255, 'F04', 68).hex).toBeUndefined()
  })

  // properties

  test('should have hsl(v) properties', () => {
    expect(perMille(color('F04').h)).toBe(955)
    expect(perMille(color('F04').s)).toBe(1000)
    expect(perMille(color('F04').l)).toBe(500)
    expect(perMille(color('F04').v)).toBe(1000)
    expect(color(255).h).toBeUndefined()
    expect(color(255).s).toBeUndefined()
    expect(color(255).l).toBeUndefined()
    expect(color(255).v).toBeUndefined()
  })

  test('should have rgb properties', () => {
    expect(color('F04').r).toBe(255)
    expect(color('F04').g).toBe(0)
    expect(color('F04').b).toBe(68)
    expect(color('F04').a).toBe(255)
    expect(color(255).r).toBeUndefined()
    expect(color(255).g).toBeUndefined()
    expect(color(255).b).toBeUndefined()
    expect(color(255).a).toBeUndefined()
  })

  test('should have hex property', () => {
    expect(color('F04').hex).toBe('#FF0044')
    expect(color('#F04').hex).toBe('#FF0044')
    expect(color('FF0044').hex).toBe('#FF0044')
    expect(color('#FF0044').hex).toBe('#FF0044')
    expect(color('F04', 128).hex).toBeUndefined()
  })

  test('should have luminance property', () => {
    expect(perMille(color('F04').luminance)).toBe(408)
    expect(perMille(color('04F').luminance)).toBe(258)
    expect(perMille(color('4F0').luminance)).toBe(600)
    expect(perMille(color('40F').luminance)).toBe(225)
    expect(perMille(color('0F4').luminance)).toBe(533)
    expect(color(255).luminance).toBeUndefined()
  })

  // methods

  test('should be able to `setRGB`', () => {
    expect(color(255).setRGB(255, 0, 68).hex).toBe('#FF0044')
  })

  test('should be able to `setSL`', () => {
    expect(color('F04').setSL(0.75, 0.5).hex).toBe('#DF1F52')
    // expect(color(255).setSL(0.75, 0.5).hex).toBeUndefined()
  })

  test('should be able to `setH`', () => {
    expect(color('F04').setH(0.75).hex).toBe('#7F00FF')
    expect(color(255).setH(0.75).hex).toBeUndefined()
  })

  test('should be able to `setSV`', () => {
    expect(color('F04').setSV(0.75, 0.5).hex).toBe('#7F1F39')
    expect(color(255).setSV(0.75, 0.5).hex).toBeUndefined()
  })

  test('should be able to `clone`', () => {
    const color1 = color('F04')
    const color2 = color1.clone()
    expect(color1).not.toBe(color2)
    expect(color2.hex).toBe('#FF0044')
    color2.setRGB(128, 128, 0)
    expect(color1.hex).toBe('#FF0044')

    const color3 = color(255)
    const color4 = color3.clone()
    expect(color3).not.toBe(color4)
    expect(color4.hex).toBeUndefined()
  })

})

