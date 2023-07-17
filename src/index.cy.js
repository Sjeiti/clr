import {color} from './color'

const mcpicker = '.mcpicker'
const color1 = '@color1'
const color2 = '@color2'
const inputHex = `${mcpicker} input:first-of-type`
const inputRGB = `${mcpicker} input[type=number]`
const selectall = '{selectall}'
const mapSelectAll = n=>selectall+n
const force = {force: true}

////////////////////////////////////////////////////////////////////

Cypress.Commands.add('typeHex', (hex) => cy
    .get(inputHex).type(hex)
)

Cypress.Commands.add('typeRGB', (r, g, b) => cy
    .get(inputRGB).as('rgb')
    .get('@rgb').eq(0).type(r)
    .get('@rgb').eq(1).type(g)
    .get('@rgb').eq(2).type(b)
)

Cypress.Commands.add('shouldHaveHex', (hex) => cy
    .get(inputHex).should('have.value', hex)
)

Cypress.Commands.add('shouldHaveRGB', (r, g, b) => cy
    .get(inputRGB).as('rgb')
    .get('@rgb').eq(0).should('have.value', r)
    .get('@rgb').eq(1).should('have.value', g)
    .get('@rgb').eq(2).should('have.value', b)
)

Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, fromX, fromY, toX, toY, steps = 3) => {
  cy.get(subject).trigger('mousedown', fromX, fromY, force)
  for (let i=0, l=Math.max(2, steps-2);i<l;i++){
    const part = (i+1)/l
    const x = fromX + part*(toX - fromX)
    const y = fromY + part*(toY - fromY)
    cy.get(subject).trigger('mousemove', x, y, force)
  }
  cy.get(subject).trigger('mouseup', toX, toY, force)
})

Cypress.Commands.add('addStyle', (css) => {
  cy.document().then(document=>{
    const style = document.createElement('style')
    style.textContent = css
    document.body.appendChild(style)
  })
})

////////////////////////////////////////////////////////////////////

describe('MC Picker', () => {

  beforeEach(() => cy
      .visit('http://localhost:5132/')
      .get('input[type=color]').as('colors')
      .get('@colors').eq(0).as('color1')
      .get('@colors').eq(1).as('color2')
  )

  it('should open when clicking `input[type=color]`', () => cy
      .get(mcpicker).should('not.exist')
      .get(color1).click()
      .get(mcpicker).should('be.visible')
      .should('have.class', 'mcpicker_char0')
  )

  it('should only open one instance', () => cy
      .get(mcpicker).should('not.exist')
      .get(color1).click()
      .get(mcpicker).should('be.visible')
      .get(color2).click()
      .get(mcpicker).should('be.visible').should('have.length', 1)
      .should('not.have.class', 'mcpicker_char0')
  )

  it('should contain input value', () => {
    cy.get(color1).click().then(elm=>{
      const value = elm.get(0).value.toUpperCase()
      cy.shouldHaveHex(value)
    })
  })

  it('should contain corresponding rgb values', () => {
    cy.get(color1).click().then(elm=>{
      const {r, g, b} = color(elm.get(0).value)
      cy.shouldHaveRGB(r, g, b)
    })
  })

  it('should have correct tab order', () => cy
      .get(color1).click()
      .get(inputHex).should('have.focus')
      .tab().type(255)
      .tab().type(0)
      .tab().type(68)
      .shouldHaveHex('#FF0044')
  )

  it('should react to typing hex values', () => cy
      .get(color1).click()
      .typeHex(selectall+'F04').shouldHaveRGB(255, 0, 68)
      .typeHex(selectall+'#4400FF').shouldHaveRGB(68, 0, 255)
      .typeHex(selectall+'#').shouldHaveRGB('', '', '')
      .typeHex('F04').shouldHaveRGB(255, 0, 68)
  )

  it('should react to typing rgb values', () => cy
      .get(color1).click()
      .typeRGB(...[255, 0, 68].map(mapSelectAll)).shouldHaveHex('#FF0044')
      .typeRGB(...[68, 0, 255].map(mapSelectAll)).shouldHaveHex('#4400FF')
      .typeRGB(...['9e9', '-8', 68].map(mapSelectAll)).shouldHaveHex('#FF0044')
  )

  it('should react to clicking', () => cy
      .get(color1).click()
      .get(mcpicker).then($elm=>{
        const $gradient = $elm.find('div:first-child')
        const $huey = $elm.find('div+div')
        cy
            .get($elm).scrollIntoView()
            .get($gradient).click($gradient.width(), 0, force)
            .get($huey).click(0.9556*$huey.width(), 5, force)
            .shouldHaveHex('#FC0040')
      })
  )

  it('should react to dragging mouse', () => cy
      .get(color1).click()
      .get(mcpicker).then($elm=>{
        const $gradient = $elm.find('div:first-child')
        const w = $gradient.width()
        const h = $gradient.height()
        const $huey = $elm.find('div+div')
        cy
            .get($elm).scrollIntoView()
            .get($gradient).drag(0.5*w, 0.5*h, 1.2*w, -20)
            .get($huey).drag(0.5*w, 5, 0.9556*w, 5).shouldHaveHex('#FF0040')
            .get($huey).drag(0.5*w, 5, -0.2*w, 50).shouldHaveHex('#FF0000')
      })
  )

  it('should reflect current state as background-color', () => cy
      .get(color1).click()
      .get(mcpicker).should('have.css', 'background-color').and('not.eq', 'rgb(255, 0, 68)')
      .typeHex(selectall+'F04')
      .get(mcpicker).should('have.css', 'background-color').and('eq', 'rgb(255, 0, 68)')
  )

  it('should work with custom css', () => cy
      .addStyle(`
          .mcpicker { width: 20rem; height: 20rem; }
          .mcpicker > div:first-child { height: calc(100% - 5rem); }
          .mcpicker > div:first-child + div { height: 2rem; }
          .mcpicker input { height: 3rem; }
      `)
      .get(color1).click()
      .get(mcpicker).scrollIntoView()
      .typeHex(selectall+'F04').shouldHaveRGB(255, 0, 68)
      .typeRGB(...[68, 0, 255].map(mapSelectAll)).shouldHaveHex('#4400FF')
      .get(mcpicker).then($elm=>{
        const $gradient = $elm.find('div:first-child')
        const w = $gradient.width()
        const h = $gradient.height()
        const $huey = $elm.find('div+div')
        cy
            .get($elm).scrollIntoView()
            .get($gradient).drag(0.5*w, 0.5*h, 1.2*w, -20)
            .get($huey).drag(0.5*w, 5, 0.9556*w, 5).shouldHaveHex('#FF0040')
      })
  )

})
