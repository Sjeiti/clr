const colorPrototype = {
  setRGB(_r, _g, _b, _a){
    const [_h, _s, _l] = rgb2hsl(_r, _g, _b)
    const _v = rgb2hsv(_r, _g, _b)[2]
    this.h = _h
    this.s = _s
    this.l = _l
    this.v = _v
    this.r = _r
    this.g = _g
    this.b = _b
    this.a = _a===undefined?255:_a
    return this
  }
  , setSL(_s, _l){
    const {r, g, b} = this
    const [h] = rgb2hsl(r, g, b)
    const [_r, _g, _b] = hsl2rgb(h, _s, _l)
    const _v = rgb2hsv(_r, _g, _b)[2]
    this.s = _s
    this.l = _l
    this.v = _v
    this.r = _r
    this.g = _g
    this.b = _b
    return this
  }
  , setH(_h){
    const {r, g, b} = this
    const [, s, l] = rgb2hsl(r, g, b)
    const [_r, _g, _b] = hsl2rgb(_h, s, l)
    this.h = _h
    this.r = _r
    this.g = _g
    this.b = _b
    return this
  }
  , setSV(_s, _v){
    const {r, g, b} = this
    const [h] = rgb2hsl(r, g, b)
    const [_r, _g, _b] = hsv2rgb(h, _s, _v)
    const _l = rgb2hsl(_r, _g, _b)[2]
    this.s = _s
    this.v = _v
    this.l = _l
    this.r = _r
    this.g = _g
    this.b = _b
    return this
  }
  , clone(){
    return color(this.r, this.g, this.b, this.a)
  }
}

/**
 * Simple color object
 * @returns {object}
 */
export function color(){
  const {length} = arguments
  const [_r, _g, _b, _a] = arguments
  const _color = Object.create(colorPrototype, {
      h: { writable: true }
    , s: { writable: true }
    , l: { writable: true }
    , v: { writable: true }
    , r: { writable: true }
    , g: { writable: true }
    , b: { writable: true }
    , a: { writable: true }
    , hex: {get(){
      const {r, g, b, a} = this
      return isValid(r, g, b, a)
          ? rgb2hex(r, g, b, a)
          : undefined
    }}
    , luminance: {get(){
        const {r, g, b} = this
        return isValid(r, g, b)
            ? (0.375*r + 0.5*g + 0.125*b)/255
            : undefined
    }}
  })
  const firstType = typeof _r
  if (length===1&&firstType==='string'){
    _color.setRGB(...hex2rgb(_r))
  } else if (firstType==='number'){
    if (length===3&&isValid(_r, _g, _b)||length===4&&isValid(_r, _g, _b, _a)){
      _color.setRGB(_r, _g, _b, _a)
    }
  }
  return _color
}

/**
 * Test arguments are set and of the same type
 * @param {object} args
 * @returns {boolean}
 */
function isValid(...args){
  const isSet = args.filter(n=>n===null||n===undefined||isNaN(n)).length===0
  const firstType = typeof args[0]
  const isType = args.filter(n=>typeof n!==firstType).length===0
  return isSet && isType
}

/**
 * Convert hex value to rgb
 * @param {string} hex
 * @returns {number[]}
 */
function hex2rgb(hex){
  const hex34 = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i.exec(hex)
  const hex68 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex)
  return hex34?.slice(1).filter(n=>n!==undefined).map(n=>parseInt(n+n, 16))
      || hex68?.slice(1).filter(n=>n!==undefined).map(n=>parseInt(n, 16))
      || []
}

/**
 * Convert rgb values to hex
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
function rgb2hex(r, g, b, a){
  //return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  const rgb = ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()
  return a===undefined || a===255
    ? '#' + rgb
    : '#' + rgb + a.toString(16).padStart(2, '0').toUpperCase()
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {number[]}
 */
function rgb2hsl(r, g, b){
    const r1 = r/255
    const g1 = g/255
    const b1 = b/255
    const max = Math.max(r1, g1, b1)
    const min = Math.min(r1, g1, b1)
    let h, s, l = (max + min)/2
    if(max === min){
        h = s = 0 // achromatic
    }else{
        let d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch(max){
            case r1: h = (g1 - b1) / d + (g1 < b1 ? 6 : 0); break
            case g1: h = (b1 - r1) / d + 2; break
            case b1: h = (r1 - g1) / d + 4; break
        }
        h /= 6
    }
    return [h, s, l]
}

/**
 * hsl2rgb helper method
 * @param {number} p
 * @param {number} q
 * @param {number} t
 * @returns {number}
 */
function hue2rgb(p, q, t){
  if (t<0) t += 1
  if (t>1) t -= 1
  if (t<1 / 6) return p + (q - p) * 6 * t
  if (t<1 / 2) return q
  if (t<2 / 3) return p + (q - p) * (2 / 3 - t) * 6
  return p
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {number[]}
 * @todo guard hsl params
 */
function hsl2rgb(h, s, l){
  let r, g, b
  if (s===0){
      r = g = b = l // achromatic
  } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1/3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1/3)
  }
  return [r, g, b].map(n=>Math.floor(n*255))
}

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {number[]}
 */
function rgb2hsv(r, g, b){
  const r1 = r/255
  const g1 = g/255
  const b1 = b/255
  const max = Math.max(r1, g1, b1)
  const min = Math.min(r1, g1, b1)
  let h, s, v = max
  const d = max - min
  s = max === 0 ? 0 : d / max
  if (max === min){
    h = 0 // achromatic
  } else {
    switch (max){
      case r1: h = (g1 - b1) / d + (g1 < b1 ? 6 : 0); break
      case g1: h = (b1 - r1) / d + 2; break
      case b1: h = (r1 - g1) / d + 4; break
    }
    h /= 6
  }
  return [h, s, v]
}

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 * @param {number} h
 * @param {number} s
 * @param {number} v
 * @returns {number[]}
 * @todo guard hsv params
 */
function hsv2rgb(h, s, v){
  let r, g, b
  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  switch (i % 6){
    case 0: r = v, g = t, b = p; break
    case 1: r = q, g = v, b = p; break
    case 2: r = p, g = v, b = t; break
    case 3: r = p, g = q, b = v; break
    case 4: r = t, g = p, b = v; break
    case 5: r = v, g = p, b = q; break
  }
  return [r, g, b].map(n=>Math.floor(n*255))
}
