import { guestStrategy, memberStrategy, superMemberStrategy } from '.'

describe('strategy', () => {
  test('different strategy', () => {
    expect(guestStrategy(100)).toBe(100)
    expect(memberStrategy(100)).toBe(90)
    expect(superMemberStrategy(100)).toBe(80)
  })
})
