/**
 * @jest-environment jsdom
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Btn from './Button'

// https://reactjs.org/docs/test-utils.html
let container:HTMLElement

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

describe('React', () => {
  test('测试属性', () => {
    act(() => {
      ReactDOM.render(
        <div>
          <Btn type="primary" id="primary-btn"></Btn>
          <Btn type="danger" id="danger-btn"></Btn>
        </div>,
      container);
    })
  
    const primaryBtn:HTMLElement = container.querySelector('#primary-btn')
    expect(primaryBtn.style.color).toBe('blue')
    const dangerBtn:HTMLElement = container.querySelector('#danger-btn')
    expect(dangerBtn.style.color).toBe('red')
  })
  test('测试children', () => {
    act(() => {
      ReactDOM.render(<Btn type="primary">abc</Btn>, container);
    })
  
    const btn = container.querySelector('.btn')
    expect(btn.textContent).toBe('abc')
  })

  test('测试回调', () => {
    const cb = jest.fn()
    act(() => {
      ReactDOM.render(<Btn type="primary" onClick={cb}></Btn>, container);
    })
    const btn: HTMLElement = container.querySelector('.btn')
    btn.click()
    expect(cb).toBeCalled()
  })
})