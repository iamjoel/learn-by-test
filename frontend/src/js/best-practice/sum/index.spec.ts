import { sum, sumSimple } from '.'

describe('求和', () => {
  test('sum', () => {
    expect(sum([1, 2, 3])).toBe(6)
    expect(sum([1, '2' as unknown as number, 3])).toBe(6)
    expect(sum([1, 'a' as unknown as number, 3])).toBe(4)
  })

  test('sumSimple', () => {
    expect(sumSimple([1, 2, 3])).toBe(6)
    expect(sumSimple([1, '2' as unknown as number, 3])).toBe(6)
    expect(sumSimple([1, 'a' as unknown as number, 3])).toBe(4)
  })
});