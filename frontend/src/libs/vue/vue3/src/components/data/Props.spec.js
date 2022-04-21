import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Props from './Props.vue'

describe('repeat', () => {
  it('props', () => {
    const wrapper = mount(Props, { props: { msg: 'Hello Vue' } })
    const text = wrapper.get('.msg').text()
    expect(text).toBe('Hello Vue')
  })
})
