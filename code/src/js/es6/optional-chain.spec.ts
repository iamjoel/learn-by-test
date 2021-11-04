describe('可选链操作符', () => {
  test('对象', () => {
    const a = {
      b: {
        c: {
          d: 1
        }
      }
    }
    expect(a.b?.c?.d).toBe(1)
    a.b = undefined
    expect(a.b?.c?.d).toBe(undefined)
  })

  test('数组', () => {
    let arr = [1]
    expect(arr?.[0]).toBe(1)
    arr = undefined
    expect(arr?.[0]).toBe(undefined)
  })

  test('函数', () => {
    let fn = () => 1
    expect(fn?.()).toBe(1)
    fn = undefined
    expect(fn?.()).toBe(undefined)
  })
})