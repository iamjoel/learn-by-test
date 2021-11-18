describe('??, ??=', () => {
  test('??: 空值合并运算符', () => {
    // 空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
    const a = null ?? 'a'
    expect(a).toBe('a')

    const b = undefined ?? 'b'
    expect(b).toBe('b')

    const num = 0 ?? 1
    expect(num).toBe(0)

    const str = '' ?? 'a'
    expect(str).toBe('')

    // ?? 与 && 和 || 合用会报错 
  })

  test('??=: 逻辑空赋值', () => {
    // 逻辑空赋值运算符 (x ??= y) 仅在 x 是 nullish (null 或 undefined) 时对其赋值。
    const obj: Record<string, any> = {
      a: null,
      b: undefined,
      num: 0,
      str: ''
    }

    obj.a ??= 'a'
    obj.b ??= 'b'
    obj.num ??= 1
    obj.str ??= 'a'
    expect(obj).toEqual({
      a: 'a',
      b: 'b',
      num: 0,
      str: ''
    })
  })
})