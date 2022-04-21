import { Sum, Num } from '.'

describe('interpreter', () => {
  test('parse sum express', () => {
    const sumExp = new Sum(new Num(100), new Num(50))
    expect(sumExp.interpret()).toBe(150)
  })
})
