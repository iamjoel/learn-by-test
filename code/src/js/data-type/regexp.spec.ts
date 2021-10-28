describe('正则', () => {
  test('匹配字母: [a-zA-Z]', () => {
    expect(/^([a-zA-Z]){52}$/.test('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(true)
  })
  test('配置数字: [0-9]', () => {
    expect(/^[0-9]{10}$/.test('0123456789')).toBe(true)
  })
  test('配置中文: [\u4e00-\u9fa5]', () => {
    expect(/^[\u4e00-\u9fa5]{2}$/.test('你好')).toBe(true)
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

  // https://www.runoob.com/w3cnote/reg-lookahead-lookbehind.html
  // test('零宽负向先行断言: ?!', () => {
  //   expect(/(?!ab)c/.test('abc'))
  // })
})