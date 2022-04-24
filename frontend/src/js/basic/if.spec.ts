describe('if', () => {
  test('falsy：让 if 条件为假的值', () => {
    const mockFn = jest.fn()
    const falsyValues: any[] = [
      false,
      0,
      -0,
      NaN,
      '',
      // eslint-disable-next-line quotes
      "",
      // eslint-disable-next-line quotes
      ``,
      null,
      undefined
    ]
    falsyValues.forEach(item => {
      if (!item) {
        mockFn()
      }
    })

    expect(mockFn.mock.calls.length).toBe(falsyValues.length)
  })
})
