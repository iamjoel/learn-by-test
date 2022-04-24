describe('async/await', () => {
  test('执行成功', async () => {
    function success () {
      return new Promise(resolve => {
        setTimeout(() => resolve('ok'), 10)
      })
    }

    const res = await success()
    expect(res).toBe('ok')
  })

  test('执行失败', async () => {
    function failure () {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('fail')), 10)
      })
    }
    try {
      await failure()
    } catch (e) {
      expect(e).toEqual(new Error('fail'))
    }
  })

  test('串行运行', async () => {
    function doSth1 () {
      return new Promise(resolve => {
        setTimeout(() => resolve('1'), 10)
      })
    }

    function doSth2 () {
      return new Promise(resolve => {
        setTimeout(() => resolve('2'), 10)
      })
    }

    function doSth3 () {
      return new Promise(resolve => {
        setTimeout(() => resolve('3'), 10)
      })
    }

    const res1 = await doSth1()
    expect(res1).toBe('1')
    const res2 = await doSth2()
    expect(res2).toBe('2')
    const res3 = await doSth3()
    expect(res3).toBe('3')
  })

  test('并行执行', async () => {
    function doSth1 ():Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('1'), 10)
      })
    }

    function doSth2 ():Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('2'), 10)
      })
    }

    function doSth3 ():Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('3'), 10)
      })
    }

    const res = await Promise.all([doSth1, doSth2, doSth3].map(fn => fn()))
    expect(res).toEqual(['1', '2', '3'])
  })
})
