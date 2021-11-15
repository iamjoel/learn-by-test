describe('常见写法', () => {
  test('定义类型: type | interface', () => {
    type NumOrStr = number | string
    let ns: NumOrStr = 1
    ns = 'a'

    interface IStudent {
      name: string
      age: number
    }
    let nsObj: IStudent = {
      name: 'Joel',
      age: 28
    }
  })

  test('变量类型', () => {
    let num1: number;
    num1 = 1
    const num2: number = 2;
    const num3 = 3 // 类型自动推断
    expect([num1, num2, num3]).toEqual([1, 2, 3])

    // 或
    let numOrStr: number | string
    numOrStr = 1
    numOrStr = 'a'

  })

  test('函数', () => {
    function sum(a: number, b: number) :number {
      return a + b
    }
    expect(sum(1, 2)).toBe(3)

    function log(msg: string): void {
      msg; // log...
    }
    expect(log('aaa'))

    // API 设计的问题，导致可选参数在前面。
    function sum2(a: number, b: number) {
      return ((a || 0 + b))
    }
    let _
    expect(sum2(_ as any, 1)).toBe(1)
  })

  test('类型转化', async () => {
    function fetchData(): Promise<any> {
      return new Promise(resolve => resolve(3))
    }

    const res: number = (await fetchData() as number)
    expect(res).toBe(3)

    let num: number = 'a' as unknown as number
  })
})