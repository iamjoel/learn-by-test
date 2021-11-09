// https://www.npmjs.com/package/query-string
import qs from 'query-string'

describe('query-string', () => {
  test('query', () => {
    expect(qs.parse('?a=b&c=d')).toEqual({
      a: 'b',
      c: 'd'
    })
    expect(qs.parse('a=b&c=d')).toEqual({
      a: 'b',
      c: 'd'
    })
    expect(qs.parse('a=&c=')).toEqual({
      a: '',
      c: ''
    })

    const query = qs.parse('?a=b&c=d')
    query.e = 'f'
    expect(qs.stringify(query)).toBe('a=b&c=d&e=f')
  })

  test('hash', () => {
    expect(qs.parse('#a=b')).toEqual({
      a: 'b'
    })
    expect(qs.parse('#a')).toEqual({
      a: null
    })
  })
})