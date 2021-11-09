describe('对象', () => {
  test('类型判断', () => {
    expect(typeof {a: 3} === 'object').toBe(true)
  })

  test('遍历', () => {
    const obj: Record<string, any> = {name: 'Joel', gender: 'Male'}

    const keys = Object.keys(obj)
    const res = keys.map((key) => {
      return `${key}:${obj[key]}`
    }, []).join(',')
    expect(res).toBe('name:Joel,gender:Male')

    const res2 = []
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        res2.push(`${key}:${obj[key]}`)
      }
    }
    expect(res2.join(',')).toBe('name:Joel,gender:Male')
  })

  test('对象合并', () => {
    const obj1 = {a: 1, b: 1}
    const obj2 = {c: 1}
    expect({
      ...obj1,
      ...obj2
    }).toEqual({
      a:1,
      b:1,
      c: 1
    })

    expect(Object.assign({}, obj1, obj2)).toEqual({
      a:1,
      b:1,
      c: 1
    })

    expect(obj1).toEqual({a: 1, b: 1})

    Object.assign(obj1, obj2)
    expect(obj1).toEqual({
      a:1,
      b:1,
      c: 1
    })
  })
})