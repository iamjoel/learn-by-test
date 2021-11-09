describe('Promise', () => {
  test('执行成功', (cb) => {
    function success() {
      return new Promise(resolve => {
        setTimeout(() => resolve('ok'), 10)
      })
    }

    success().then(res => {
      expect(res).toBe('ok')
      cb()
    })
  })

  test('执行失败', (cb) => {
    function failure() {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject('fail'), 10)
      })
    }

    failure().catch(res => {
      expect(res).toBe('fail')
      cb()
    })
  })

  test('串行运行', (cb) => {
    function doSth1() {
      return new Promise(resolve => {
        setTimeout(() => resolve('1'), 10)
      })
    }

    function doSth2() {
      return new Promise(resolve => {
        setTimeout(() => resolve('2'), 10)
      })
    }

    function doSth3() {
      return new Promise(resolve => {
        setTimeout(() => resolve('3'), 10)
      })
    }

    doSth1().then(msg => {
      expect(msg).toBe('1')
      return doSth2()
    }).then(msg => {
      expect(msg).toBe('2')
      return doSth3()
    }).then(msg => {
      expect(msg).toBe('3')
      cb()
    })
  })

  test('并行执行', (cb) => {
    function doSth1():Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('1'), 10)
      })
    }

    function doSth2():Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('2'), 10)
      })
    }

    function doSth3():Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('3'), 10)
      })
    }

    Promise.all([doSth1(), doSth2(), doSth3()]).then(res => {
      expect(res).toEqual(['1', '2', '3'])
      cb()
    })
  })

  test('所有异步都完成，失败也算：Promise.allSettled', (cb) => {
    function doSth1():Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('1'), 10)
      })
    }

    function doSth2():Promise<string> {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject('2'), 10)
      })
    }

    function doSth3():Promise<string> {
      return new Promise(resolve => {
        setTimeout(() => resolve('3'), 10)
      })
    }

    Promise.allSettled([doSth1(), doSth2(), doSth3()]).then(res => {
      const successes = res
                          .filter(item => item.status === 'fulfilled')
                          .map((item: any) => item.value)
      const failures =  res
                        .filter(item => item.status === 'rejected')
                        .map((item: any) => item.reason)                
      expect(successes).toEqual(['1', '3'])
      expect(failures).toEqual(['2'])
      cb()
    })
  })
})