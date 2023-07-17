import {color} from './color'

const perMille = n=>n*1000<<0

describe('color', () => {

  // initialisation

  it('should initialise with single param hex values', () => {
    assert.equal(color('F04').hex, '#FF0044')
    assert.equal(color('#F04').hex, '#FF0044')
    assert.equal(color('FF0044').hex, '#FF0044')
    assert.equal(color('#FF0044').hex, '#FF0044')
    assert.equal(color('F04', 128).hex, undefined)
  })

  it('should initialise with rgb values', () => {
    assert.equal(color(255, 0, 68).hex, '#FF0044')
    assert.equal(color(255, 0).hex, undefined)
    assert.equal(color(255).hex, undefined)
    assert.equal(color(255, 0, 68, 128).hex, undefined)
    assert.equal(color(255, 'F04', 68).hex, undefined)
  })

  // properties

  it('should have hsl(v) properties', () => {
    assert.equal(perMille(color('F04').h), 955)
    assert.equal(perMille(color('F04').s), 1000)
    assert.equal(perMille(color('F04').l), 500)
    assert.equal(perMille(color('F04').v), 1000)
    assert.equal(color(255).h, undefined)
    assert.equal(color(255).s, undefined)
    assert.equal(color(255).l, undefined)
    assert.equal(color(255).v, undefined)
  })

  it('should have rgb properties', () => {
    assert.equal(color('F04').r, 255)
    assert.equal(color('F04').g, 0)
    assert.equal(color('F04').b, 68)
    assert.equal(color(255).r, undefined)
    assert.equal(color(255).g, undefined)
    assert.equal(color(255).b, undefined)
  })

  it('should have hex property', () => {
    assert.equal(color('F04').hex, '#FF0044')
    assert.equal(color('#F04').hex, '#FF0044')
    assert.equal(color('FF0044').hex, '#FF0044')
    assert.equal(color('#FF0044').hex, '#FF0044')
    assert.equal(color('F04', 128).hex, undefined)
  })

  it('should have luminance property', () => {
    assert.equal(perMille(color('F04').luminance), 408)
    assert.equal(perMille(color('04F').luminance), 258)
    assert.equal(perMille(color('4F0').luminance), 600)
    assert.equal(perMille(color('40F').luminance), 225)
    assert.equal(perMille(color('0F4').luminance), 533)
    assert.equal(color(255).luminance, undefined)
  })

  // methods

  it('should be able to `setRGB`', () => {
    assert.equal(color(255).setRGB(255, 0, 68).hex, '#FF0044')
  })

  it('should be able to `setSL`', () => {
    assert.equal(color('F04').setSL(0.75, 0.5).hex, '#DF1F52')
    // assert.equal(color(255).setSL(0.75, 0.5).hex, undefined)
  })

  it('should be able to `setH`', () => {
    assert.equal(color('F04').setH(0.75).hex, '#7F00FF')
    assert.equal(color(255).setH(0.75).hex, undefined)
  })

  it('should be able to `setSV`', () => {
    assert.equal(color('F04').setSV(0.75, 0.5).hex, '#7F1F39')
    assert.equal(color(255).setSV(0.75, 0.5).hex, undefined)
  })

  it('should be able to `clone`', () => {
    const color1 = color('F04')
    const color2 = color1.clone()
    assert.notEqual(color1, color2)
    assert.equal(color2.hex, '#FF0044')
    color2.setRGB(128, 128, 0)
    assert.equal(color1.hex, '#FF0044')

    const color3 = color(255)
    const color4 = color3.clone()
    assert.notEqual(color3, color4)
    assert.equal(color4.hex, undefined)
  })

})
