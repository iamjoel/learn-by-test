describe('if', () => {
  test('falsy：让 if 条件为假的值', () => {
    const mockFn = jest.fn()
    const falsyValues: any[] = [
      false,
      0,
      -0,
      NaN,
      '',
      "",
      ``,
      null,
      undefined,
    ]
    falsyValues.forEach(item => {
      if(item) {} else {
        mockFn()
      }
    })

    expect(mockFn.mock.calls.length).toBe(falsyValues.length)
  })
})