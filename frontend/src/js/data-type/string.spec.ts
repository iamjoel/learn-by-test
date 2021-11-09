describe('字符串', () => {
  test('类型判断', () => {
    expect(typeof 'a' === 'string').toBe(true)
    expect(typeof "a" === 'string').toBe(true)
    expect(typeof `a` === 'string').toBe(true)
    expect(typeof 3 === 'string').toBe(false)
  })

  test('模板字符串', () => {
    const name = 'Joel'
    const greetingMsg = `My name is ${name}`
    expect(greetingMsg).toBe('My name is Joel')
  })

  test('查找', () => {
    expect('abc'.includes('a')).toBe(true)
    expect('abc'.includes('d')).toBe(false)

    expect('abc'.indexOf('a')).toBe(0)
    expect('abc'.indexOf('d')).toBe(-1)

    expect('abc'.startsWith('ab')).toBe(true)
    expect('abc'.startsWith('bc')).toBe(false)
  })

  test('取子字符串: substr(开始包含，[长度])', () => {
    const str = 'abcde'
    expect(str.substr(1)).toBe('bcde')
    expect(str.substr(1, 3)).toBe('bcd')
    expect(str.substr(0, 3)).toBe('abc')
    expect(str.substr(0, 0)).toBe('')
    expect(str.substr(0, -1)).toBe('')

    expect(str).toBe('abcde')

    // 取一个字符
    expect(str.charAt(0)).toBe('a')
  })

  test('替换:replace, replaceAll', () => {
    const str = `I'm Joel`
    expect(str.replace('Joel', 'Jack')).toBe(`I'm Jack`)
    expect(str.replace(/J\w*/, 'Jack')).toBe(`I'm Jack`)

    expect(str).toBe(`I'm Joel`)

    expect('abcabc'.replace('a', 'b')).toBe('bbcabc')
    expect('abcabc'.replace(/a/g, 'b')).toBe('bbcbbc')
  })

  test('转数组', () => {
    expect('a,b,c'.split(',')).toEqual(['a', 'b', 'c'])
    expect('a,b,c'.split(/,/)).toEqual(['a', 'b', 'c'])
  })

  test('大小写转换', () => {
    expect('abCDe'.toUpperCase()).toBe('ABCDE')
    expect('abCDe'.toLowerCase()).toBe('abcde')
  })

  test('trim', () => {
    expect('   abc   '.trim()).toBe('abc')
  })

  test('填充: padStart|padEnd', () => {
    expect('5'.padStart(2, '0')).toBe('05')
    expect('05'.padStart(2, '0')).toBe('05')
    expect('005'.padStart(2, '0')).toBe('005')

    expect('5'.padEnd(2, '0')).toBe('50')
  })

  test('连接', () => {
    expect('a' + 'b').toBe('ab')
    expect('a' + 1).toBe('a1')
  })

  test('UTF Code 转换成字符串', () => {
    expect(String.fromCharCode(65)).toBe('A')
    expect(String.fromCharCode(65, 66, 67)).toBe('ABC')
  })
})