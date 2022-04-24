describe('循环', () => {
  test('for', () => {
    const fn = jest.fn()
    for (let i = 0; i < 5; i++) {
      fn()
    }
    expect(fn).toBeCalledTimes(5)
  })

  test('while', () => {
    const fn = jest.fn()
    let i = 0
    while (i < 5) {
      fn()
      i++
    }
    expect(fn).toBeCalledTimes(5)
  })

  test('do while', () => {
    const fn = jest.fn()
    let i = 0
    do {
      fn()
      i++
    } while (i < 5)
    expect(fn).toBeCalledTimes(5)

    const fn2 = jest.fn()
    i = 0
    do {
      fn2()
      i++
    } while (i < 0)
    expect(fn2).toBeCalledTimes(1)
  })
})
