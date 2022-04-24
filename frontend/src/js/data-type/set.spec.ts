describe('set', () => {
  test('创建&设置', () => {
    const s = new Set<number>()
    s.add(1)
    s.add(2)
    expect(Array.from(s)).toEqual([1, 2])
    s.delete(1)
    expect(Array.from(s)).toEqual([2])
  })

  test('包含检查: has', () => {
    const s = new Set<string>()
    s.add('a')
    expect(s.has('a')).toBe(true)
    expect(s.has('b')).toBe(false)
  })

  test('不存在相同的', () => {
    const s = new Set<number>()
    s.add(1)
    s.add(1)
    s.add(1)
    s.add(1)
    s.add(1)
    s.add(2)
    s.add(2)
    expect(Array.from(s)).toEqual([1, 2])
  })
})
