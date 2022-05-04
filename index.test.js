/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8')

describe('testing the form element', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  it('tests the form exists', () => {
    const submitForm = document.querySelector('#form-id')
    expect(submitForm).toBeTruthy()
  })

  it('tests the button has a text of Send', () => {
    const submitBtn = document.querySelector('#form-btn')
    expect(submitBtn.value).toEqual('Send')
  })

  it('tests the form is showing', () => {
    const submitForm = document.querySelector('#form-id')
    expect(window.getComputedStyle(submitForm).display).not.toEqual('none')
  })
})
