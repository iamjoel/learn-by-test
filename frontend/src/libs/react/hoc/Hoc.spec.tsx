/**
 * @jest-environment jsdom
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import JoelPet from './Hoc'

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
  test('Hoc', () => {
    act(() => {
      ReactDOM.render(
        <div id="tar">
          <JoelPet name="wangwang"></JoelPet>
        </div>,
        container)
    })

    const tar:HTMLElement = container.querySelector('#tar')
    expect(tar.textContent).toBe("wangwang's owner is Joel.")
  })
})