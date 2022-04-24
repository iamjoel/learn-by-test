describe('数字', () => {
  test('数字判断: typeof', () => {
    expect(typeof 3 === 'number').toBe(true)
    expect(typeof 3.5 === 'number').toBe(true)
    expect(typeof Math.PI === 'number').toBe(true)
    expect(typeof '3' === 'number').toBe(false)
  })

  test('整数判断: Number.isInteger', () => {
    expect(Number.isInteger(3)).toBe(true)
    expect(Number.isInteger(3.5)).toBe(false)
    expect(Number.isInteger('3' as unknown as number)).toBe(false)
  })

  test('保留小数N位: toFixed', () => {
    expect(3.1541.toFixed(2)).toBe('3.15')
    expect(3.1551.toFixed(2)).toBe('3.16')
  })

  test('小数转整数', () => {
    expect(Math.ceil(4.3)).toBe(5) // 向上取整
    expect(Math.floor(4.9)).toBe(4) // 向下取整
    expect(Math.round(4.4)).toBe(4) // 四舍五入
    expect(Math.round(4.5)).toBe(5) // 四舍五入
  })

  test('字符串转数字', () => {
    expect(parseInt('3.9', 10)).toBe(3)
    expect(parseInt('10', 2)).toBe(2) // 进制
    expect(parseFloat('3.9')).toBe(3.9)
  })

  test('小数运算', () => {
    expect(0.1 + 0.2).not.toBe(0.3)
    expect(0.1 * 0.2).not.toBe(0.02)
    expect(0.2 + 0.2).toBe(0.4)
  })

  test('最大最小值: Math.max, Math.min', () => {
    expect(Math.max(1, 2, 3, 4, 5)).toBe(5)
    expect(Math.max(7)).toBe(7)
    expect(Math.max('1' as unknown as number, '2' as unknown as number)).toBe(2)
    // 数组
    expect(Math.max(...[1, 6.7, 3.5])).toBe(6.7)
    // 有非数字的情况
    expect(isNaN(Math.max(1, 'a' as unknown as number))).toBe(true)

    expect(Math.min(1, 2, 3, 4, 5)).toBe(1)
  })
})
