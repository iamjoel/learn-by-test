import SuperMan from './index'

describe('singleton', () => {
  test('singleton', () => {
    const superman1 = new SuperMan('Joel')
    const superman2 = new SuperMan('Joel2')
    expect(superman1.name).toBe('Joel')
    expect(superman2.name).toBe('Joel')
    expect(superman1 === superman2).toBe(true)
  })
})
