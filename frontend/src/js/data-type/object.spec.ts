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

  test('冻结对象: freeze', () => {
    // 冻结对象后：不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。
    // 冻结对象能提升大对象，数组的性能
    const obj = {a: 1, b: {name: 'Joel'}}
    expect(Object.isFrozen(obj)).toBe(false)
    Object.freeze(obj)
    expect(Object.isFrozen(obj)).toBe(true)
    expect(() => {
      obj.a = 2
    }).toThrowError()
    expect(obj.a).toBe(1)

    // 只冻结对象的第一层
    obj.b.name = 'Jack'
    expect(obj.b.name).toBe('Jack')

    // 没有 API 解冻。只能通过拷贝对象。
    const obj2 = {...obj}
    expect(Object.isFrozen(obj2)).toBe(false)
    expect(obj2).toEqual(obj)
    
    // 冻结数组
    const arr = [1, 2, 3]
    Object.freeze(arr)
    expect(() => {
      arr[0] = 2
    }).toThrowError()
    expect(arr[0]).toBe(1)
  })
})