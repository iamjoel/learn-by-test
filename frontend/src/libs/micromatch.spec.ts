import micromatch from 'micromatch'

describe('micromatch', () => {
  test('match *', () => {
    expect(micromatch.match(['foo', 'bar', 'qux'], 'f*')).toEqual(['foo'])
    expect(micromatch.match(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*'] as any)).toEqual(['foo', 'bar', 'baz'])
  })

  test('match negation', () => {
    expect(micromatch.match(['bar', 'baz'], ['b*', '!baz'] as any)).toEqual(['bar'])
  })

  test('isMatch', () => {
    const isMatch = micromatch.matcher('f*')
    expect(isMatch('foo')).toBe(true)
    expect(isMatch('baz')).toBe(false)
  })
})
