import MyArray from '.'

describe('iterator', () => {
  test('iterator my array', () => {
    const arr = new MyArray(['a', 'b', 'c'])
    expect(arr.next()).toEqual([0, 'a'])
    expect(arr.next()).toEqual([1, 'b'])
    expect(arr.next()).toEqual([2, 'c'])
    expect(arr.hasNext()).toBe(false)
  })
})
