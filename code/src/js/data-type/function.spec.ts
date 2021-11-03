describe('函数', () => {
  test('获取函数的所有参数', () => {
    function getArgs() {
      return Array.from(arguments)
    }

    expect(getArgs(1, 2)).toEqual([1, 2])

    const getArgs2 = (...args: number[]) => args
    expect(getArgs2(1, 2)).toEqual([1, 2])
  })

  test('参数个数', () => {
    function f1() {}
    expect(f1.length).toBe(0)
    function f2(a: number) {}
    expect(f2.length).toBe(1)
    function f3(a: number, b: number) {}
    expect(f3.length).toBe(2)

    const f4 = (a: number, b: number) => {}
    expect(f4.length).toBe(2)
  })

  test('可选参数', () => {
    function sum(a?: number, ...rest: number[]) {
      if(rest.length === 0) {
        return a
      }
      return rest.reduce((prev, curr) => prev + curr, a)
    }

    expect(sum(1)).toBe(1)
    expect(sum(1, 2, 3)).toBe(6)
  })

  test('参数默认值', () => {
    function f1(name:string='Joel') {
      return name
    }
    expect(f1()).toBe('Joel')
    expect(f1(undefined)).toBe('Joel')
    expect(f1('Jack')).toBe('Jack')
  })
})