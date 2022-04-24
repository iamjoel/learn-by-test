describe('解构赋值', () => {
  test('解构赋值', () => {
    const obj = { a: 1, b: { name: 'Joel' }, c: 2 }
    const { a, b: { name }, c: d } = obj
    expect(a).toBe(1)
    expect(name).toBe('Joel')
    expect(d).toBe(2) // 别名

    const arr = [1, 2, 3]
    const [elem1, elem2, elem3] = arr
    expect(elem1).toBe(1)
    expect(elem2).toBe(2)
    expect(elem3).toBe(3)

    const str = 'abc'
    const [c1, c2, c3]: any = str
    expect(c1).toBe('a')
    expect(c2).toBe('b')
    expect(c3).toBe('c')
  })

  test('剩余参数', () => {
    const obj = { a: 1, b: { name: 'Joel' }, c: 2 }
    const { a, ...restObj } = obj
    expect(restObj).toEqual({ b: { name: 'Joel' }, c: 2 })

    const arr = [1, 2, 3]
    // eslint-disable-next-line no-unused-vars
    const [b, ...restArr] = arr
    expect(restArr).toEqual([2, 3])
  })

  test('值交换', () => {
    let [a, b]: number[] = [1, 2] as number[]
    [a, b] = [b, a]
    expect(a).toBe(2)
    expect(b).toBe(1)
  })
})
