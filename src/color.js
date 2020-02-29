/**
 * Simple color object
 * @return {object}
 */
export function color(){
  let h, s, l, r, g, b
  const {length} = arguments
  const [_r, _g, _b] = arguments
  const _color = Object.create({
    setRGB(_r, _g, _b){
      const [_h, _s, _l] = rgb2hsl(_r, _g, _b)
      h = _h
      s = _s
      l = _l
      r = _r
      g = _g
      b = _b
      console.log({h, s, l, r, g, b}) // todo: remove log
      return this
    }
    , setHSL(_h, _s, _l){
      const [_r, _g, _b] = hsl2rgb(_h, _s, _l)
      h = _h
      s = _s
      l = _l
      r = _r
      g = _g
      b = _b
      console.log({h, s, l, r, g, b}) // todo: remove log
      return this
    }
    // getHue
    // setHue
    //
    // getSaturation
    // setSaturation
    //
    // getLightness
    // setLightness
    //
    // getValue
    // setValue
    //
    // getLuminance
    //
    // lightenByAmount
    // darkenByAmount
    //
    // toCSS
    //
    // getRed
    // getGreen
    // getBlue
  }, {
    foo: {
      writable: true
      , configurable: true
      , value: 'hello'
    }
    , h: {get: function(){ return h }}
    , s: {get: function(){ return s }}
    , l: {get: function(){ return l }}
    , r: {get: function(){ return r }}
    , g: {get: function(){ return g }}
    , b: {get: function(){ return b }}
    , hex: {get: function(){ return rgb2hex(r, g, b) }}
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
 * @return {number[]}
 */
function hex2rgb(hex){
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result && result.splice(1).map(n=>parseInt(n, 16))
}

/**
 * Convert rgb values to hex
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
function rgb2hex(r, g, b){
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {number[]}
 */
function rgb2hsl(r, g, b){
    r /= 255, g /= 255, b /= 255
    let max = Math.max(r, g, b), min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2

    if(max === min){
        h = s = 0 // achromatic
    }else{
        let d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break
            case g: h = (b - r) / d + 2; break
            case b: h = (r - g) / d + 4; break
        }
        h /= 6
    }

    return [h, s, l]
}


/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @return {number[]}
 */
function hsl2rgb(h, s, l){
    let r, g, b

    if(s === 0){
        r = g = b = l // achromatic
    }else{
        const hue2rgb = (p, q, t)=>{
            if(t < 0) t += 1
            if(t > 1) t -= 1
            if(t < 1/6) return p + (q - p) * 6 * t
            if(t < 1/2) return q
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6
            return p
        }

        let q = l < 0.5 ? l * (1 + s) : l + s - l * s
        let p = 2 * l - q
        r = hue2rgb(p, q, h + 1/3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1/3)
    }

    return [r * 255, g * 255, b * 255]
}
