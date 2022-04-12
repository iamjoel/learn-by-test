import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Repeat from './Repeat.vue'

describe('repeat', () => {
  it('v-for', () => {
    const wrapper = mount(Repeat)
    const firstItemText = wrapper.get('.item:nth-child(1)').text()
    expect(firstItemText).toBe('a')
    const secondItemText = wrapper.get('.item:nth-child(2)').text()
    expect(secondItemText).toBe('b')
    const thirdItemText = wrapper.get('.item:nth-child(3)').text()
    expect(thirdItemText).toBe('c')
  })
})