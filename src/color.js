/**
 * Simple color object
 * @returns {object}
 */
export function color(){
  let h, s, l, v, r, g, b
  const {length} = arguments
  const [_r, _g, _b] = arguments
  const _color = Object.create({
    setRGB(_r, _g, _b){
      const [_h, _s, _l] = rgb2hsl(_r, _g, _b)
      const _v = rgb2hsv(_r, _g, _b)[2]
      h = _h
      s = _s
      l = _l
      v = _v
      r = _r
      g = _g
      b = _b
      return this
    }
    , setSL(_s, _l){
      const [_r, _g, _b] = hsl2rgb(h, _s, _l)
      const _v = rgb2hsv(_r, _g, _b)[2]
      s = _s
      l = _l
      v = _v
      r = _r
      g = _g
      b = _b
      return this
    }
    , setH(_h){
      const [_r, _g, _b] = hsl2rgb(_h, s, l)
      h = _h
      r = _r
      g = _g
      b = _b
      return this
    }
    , setSV(_s, _v){
      const [_r, _g, _b] = hsv2rgb(h, _s, _v)
      const _l = rgb2hsl(_r, _g, _b)[2]
      s = _s
      v = _v
      l = _l
      r = _r
      g = _g
      b = _b
      return this
    }
    , clone(){
      return color(r, g, b)
    }
  }, {
    h: {get: function(){ return h }}
    , s: {get: function(){ return s }}
    , l: {get: function(){ return l }}
    , v: {get: function(){ return v }}
    , r: {get: function(){ return r }}
    , g: {get: function(){ return g }}
    , b: {get: function(){ return b }}
    , hex: {get: function(){ return rgb2hex(r, g, b) }}
    , luminance: {get: function(){ return (0.375*r + 0.5*g + 0.125*b)/255 }}
  })
  if (length===1&&typeof _r === 'string'){
    _color.setRGB(...hex2rgb(_r))
  } else if (length===3&&typeof _r === 'number'){
    _color.setRGB(_r, _g, _b)
  }
  return _color
}

/**
 * Convert hex value to rgb
 * @param {string} hex
 * @returns {number[]}
 */
function hex2rgb(hex){
  const hexThree = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex)
  const hexSix = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return hexThree?.splice(1).map(n=>parseInt(n+n, 16))
      || hexSix?.splice(1).map(n=>parseInt(n, 16))
}

/**
 * Convert rgb values to hex
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
function rgb2hex(r, g, b){
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
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
