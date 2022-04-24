import micromatch from 'micromatch'

// https://www.npmjs.com/package/micromatch
describe('micromatch', () => {
  test('match *: zero or more char', () => {
    expect(micromatch.match(['', 'f', 'foo', 'bar', 'qux'], 'f*')).toEqual(['f', 'foo'])
    expect(micromatch.match(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*'] as any)).toEqual(['foo', 'bar', 'baz'])
  })

  test('match ?: one char', () => {
    expect(micromatch(['', 'f', 'fa', 'fb', 'foo'], 'f?')).toEqual(['fa', 'fb'])
  })

  test('match or', () => {
    expect(micromatch.match(['foo', 'bar', 'baz', 'bc'], '{f,ba}*')).toEqual(['foo', 'bar', 'baz'])
    expect(micromatch.match(['foo', 'bar', 'baz', 'bc'], '(f|ba)*')).toEqual(['foo', 'bar', 'baz'])
  })

  test('match range', () => {
    expect(micromatch(['apple', 'banana', 'candy', 'dog'], '[a-c]*')).toEqual(['apple', 'banana', 'candy'])
    expect(micromatch(['13', '241', '3', '4'], '[1-3]*')).toEqual(['13', '241', '3'])
  })

  test('match Glob: **', () => {
    expect(micromatch.match(['src/a.js', 'src/b/d/c.js', 'dist/main.js'], 'src/**')).toEqual(['src/a.js', 'src/b/d/c.js'])
    expect(micromatch.match(['src/a.js', 'src/b/d/c.js', 'src/b/d/c.ts', 'dist/main.js'], 'src/**/*.js')).toEqual(['src/a.js', 'src/b/d/c.js'])
  })

  test('match negation', () => {
    expect(micromatch.match(['bar', 'baz'], ['b*', '!baz'] as any)).toEqual(['bar'])
    expect(micromatch.match(['bar', 'baz', 'bbz'], ['b*', '!ba*', '!bbz'] as any)).toEqual([])
  })

  test('isMatch', () => {
    const isMatch = micromatch.matcher('f*')
    expect(isMatch('foo')).toBe(true)
    expect(isMatch('baz')).toBe(false)
  })
})
