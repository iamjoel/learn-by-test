describe('泛型', () => {
  test('泛型就是将类型参数传进去', () => {
    // T=string 中， string 是默认类型。
    function push<T=string> (list: T[], item: T): T[] {
      const res = [...list, item]
      return res
    }

    const arr = [1, 2, 3]
    const arr2 = push<number>(arr, 4)
    expect(arr2).toEqual([1, 2, 3, 4])

    const strArr = ['a']
    const strArr2 = push(strArr, 'b')
    expect(strArr2).toEqual(['a', 'b'])
  })
})
