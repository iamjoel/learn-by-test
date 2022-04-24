import { unique, uniqueObj, uniqUseSet, uniqUgly } from '.'
describe('去重', () => {
  test('unique', () => {
    expect(unique([1, 2, 3, 1, 2, 1])).toEqual([1, 2, 3])
    expect(unique(['a', 'b', 'c', 'a', 'b', 'a', 'd'])).toEqual(['a', 'b', 'c', 'd'])
  })

  test('uniqueObj', () => {
    const arr = [1, 2, 3, 1, 2, 1].map(i => ({ id: i }))
    expect(uniqueObj(
      arr,
      (i: {id: number}) => i.id
    )).toEqual([1, 2, 3].map(i => ({ id: i })))
  })

  test('uniqUseSet', () => {
    expect(uniqUseSet([1, 2, 3, 1, 2, 1])).toEqual([1, 2, 3])
  })

  test('uniqUgly', () => {
    expect(uniqUgly([1, 2, 3, 1, 2, 1])).toEqual([1, 2, 3])
  })
})
