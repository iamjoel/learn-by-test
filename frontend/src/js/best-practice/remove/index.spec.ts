import { remove, removeUgly } from '.'
describe('删除元素', () => {
  test('remove', () => {
    expect(remove([1, 2, 3], 2)).toEqual([1, 3])
    expect(remove([1, 2, 3], 5)).toEqual([1, 2, 3])
  })

  test('removeUgly', () => {
    expect(removeUgly([1, 2, 3], 2)).toEqual([1, 3])
    expect(removeUgly([1, 2, 3], 5)).toEqual([1, 2, 3])
  })
})
