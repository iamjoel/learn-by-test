import { max, maxSimple } from '.'
describe('数组中的最大值', () => {
  test('max', () => {
    expect(max([1, 2, 100, 4])).toBe(100)
    expect(max(['20' as unknown as number, 4, 'a' as unknown as number])).toBe(20)
    expect(max([])).toBe(-Infinity)
  })

  test('maxSimple', () => {
    expect(maxSimple([1, 2, 100, 4])).toBe(100)
    expect(maxSimple(['20' as unknown as number, 4, 'a' as unknown as number])).toBe(20)
    expect(maxSimple([])).toBe(-Infinity)
  })
})
