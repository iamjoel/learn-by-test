
describe('正则', () => {
  test('匹配字母: [a-zA-Z]', () => {
    expect(/^([a-zA-Z]){52}$/.test('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(true)
  })
  test('配置数字: [0-9]', () => {
    expect(/^[0-9]{10}$/.test('0123456789')).toBe(true)
  })
  // eslint-disable-next-line no-useless-escape
  test('配置单个字符: \w', () => {
    // 等价于 [A-Za-z0-9_]
    expect(/^[0-9]{10}$/.test('0123456789')).toBe(true)
    expect(/^([a-zA-Z]){52}$/.test('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(true)
    expect(/_/.test('_'))
  })
  test('配置中文: [\u4e00-\u9fa5]', () => {
    expect(/^[\u4e00-\u9fa5]{2}$/.test('你好')).toBe(true)
  })
  // eslint-disable-next-line no-useless-escape
  test('匹配空白字符: \s', () => {
    // 等价于[ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
    expect(/\s/.test(' ')).toBe(true)
  })
  test('匹配任意字符: .', () => {
    const payload = '!@#$%^&*()_+-=.?/1a'
    expect(new RegExp(`^.{${payload.length}}$`).test(payload)).toBe(true)
  })
  test('不捕获分组: () 开头加 ?:', () => {
    expect(/^(1)$/.exec('1').length).toBe(2)
    expect(/^(?:1)$/.exec('1').length).toBe(1)
  })
  test('非贪婪匹配: 量词后跟?', () => {
    expect(/(\w+)[0-9]+/.exec('123')[1]).toBe('12')
    expect(/(\w+?)[0-9]+/.exec('123')[1]).toBe('1')
  })

  // https://zhuanlan.zhihu.com/p/50789818
  describe('正向预查: Lookahead', () => {
    test('肯定模式:(?=预查内容)', () => {
      // a 后面是 b
      expect(/a(?=b)/.test('ab')).toBe(true)
      expect(/a(?=b)/.test('ac')).toBe(false)
    })
    test('否定模式:(?!预查内容)', () => {
      // a 后面不是 b
      expect(/a(?!b)/.test('ab')).toBe(false)
      expect(/a(?!b)/.test('ac')).toBe(true)
    })

    test('预查不消耗字符:(?=预查内容)', () => {
      expect(/(a(?=b))/.exec('ab').length).toBe(2)
      expect(/(a(?=b))/.exec('ab')[1]).toBe('a')
    })
    // expect(/(?!ab)c/.test('abc'))
  })

  describe('负向预查: Lookbehind', () => {
    test('肯定模式:(?<=预查内容)', () => {
      // b 前面是 a
      expect(/(?<=a)b/.test('ab')).toBe(true)
      expect(/(?<=a)b/.test('bc')).toBe(false)
    })
    test('否定模式:(?!预查内容)', () => {
      // b 前面不是 a
      expect(/(?<!a)b/.test('ab')).toBe(false)
      expect(/(?<!a)b/.test('bc')).toBe(true)
      expect(/(?<!\.e2e)\.spec\.ts/.test('a.e2e.spec.ts')).toBe(false)
      expect(/(?<!\.e2e)\.spec\.ts/.test('ae2e.spec.ts')).toBe(true)
      expect(/(?<!\.e2e)\.spec\.ts/.test('xxx.spec.ts')).toBe(true)
    })
  })
})
