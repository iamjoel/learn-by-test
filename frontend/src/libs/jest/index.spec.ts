import axios from 'axios'
import { fetchUser } from './utils/service'
// 注意 jest.mock 要在顶层调用，在 test() 调用不生效。
jest.mock('axios')

import getGuid, { getYear, getMonth } from './utils/get-info'
jest.mock('./utils/get-info', () => {
  const originalModule = jest.requireActual('./utils/get-info')
  return {
    __esModule: true,
    ...originalModule,
    default: () => 'abc',
    getYear: () => 2021,
  }
})

describe('Jest', () => {
  describe('断言 API', () => {
    test('相等', () => {
      expect(7).toBe(7)
      expect(7).not.toBe(3)
      expect({name: 'Joel'}).not.toBe({name: 'Joel'})
    })

    test('引用类型值的深度相等', () => {
      expect({name: 'Joel'}).toEqual({name: 'Joel'})
      expect([1]).toEqual([1])
      expect([1, [[[1]]]]).toEqual([1, [[[1]]]])
    })

    test('浮动数运算比较', () => {
      expect(0.1 + 0.2).not.toBe(0.3)
      expect(0.1 + 0.2).toBeCloseTo(0.3)
    })
  })

  describe('回调被执行情况', () => {
    test('是否被调用', () => {
      const cb = jest.fn()
      cb()
      expect(cb).toBeCalled()
    })

    test('被调用次数', () => {
      const cb = jest.fn()
      cb() // 1
      cb() // 2
      cb() // 3
      cb() // 4
      cb() // 5
      expect(cb).toHaveBeenCalledTimes(5)
    })

    test('被调用时的参数', () => {
      const cb = jest.fn()
      cb(1, 2)
      expect(cb).toHaveBeenCalledWith(1, 2)
      cb([1], {name: 'Joel'})
      expect(cb).toHaveBeenCalledWith([1], {name: 'Joel'})
    })

    test('被多次调用时的参数', () => {
      const cb = jest.fn()
      cb('a')
      cb('b')
      cb('c')
      expect(cb).toHaveBeenNthCalledWith(1, 'a')
      expect(cb).toHaveBeenNthCalledWith(2, 'b')
      expect(cb).toHaveBeenNthCalledWith(3, 'c')
    })
  })

  describe('测试异步代码', () => {
    test('回调类型异步: 通过在回调中传入 done', done => {
      function fetchNameCallback(cb: (name: string) => void) {
        setTimeout(() => {
          cb('Joel')
        }, 1000)
      }

      fetchNameCallback(name => {
        expect(name).toBe('Joel')
        done()
      })
    })

    function fetchName(throwError?: boolean) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(!throwError) {
            resolve('Joel')
          } else {
            reject('error happened')
          }
        }, 1000)
      })
    }

    test('Promise 类型的异步：正常写', () => {
      fetchName().then(name => {
        expect(name).toBe('Joel')
      })
  
      fetchName(true).catch(e => {
        expect(e).toMatch('error')
      })
    })

    test('Async/Await 类型的异步：正常写', async () => {
      const name = await fetchName()
      expect(name).toBe('Joel')

      try {
        await fetchName(true)
      } catch(e) {
        expect(e).toMatch('error')
      }
    })
  })

  describe('测试异常', () => {
    test('测试异常', () => {
      function throwErrorFn() {
        throw new Error('Error happened')
      }
      expect(throwErrorFn).toThrow()
      expect(throwErrorFn).toThrow('Error happened')
      expect(throwErrorFn).toThrow(/happened/)
      expect(throwErrorFn).toThrow(Error('Error happened'))
    })
  })

  describe('Mock', () => {
    test('Mock 第三方包: jest.mock("axios")', () => {
      const _axiosPrev = axios.get;

      (axios.get as any).mockImplementation((url: string) => {
        if(/^\/user$/.test(url)) {
          return Promise.resolve({name: 'Joel'})
        }
        return Promise.resolve('other')
      })

      fetchUser().then(({ name }) => {
        expect(name).toBe('Joel')
        axios.get = _axiosPrev
      })
    })

    test('Mock 文件的全部或部分内容', () => {
      expect(getGuid()).toBe('abc')
      expect(getYear()).toBe(2021)
      expect(getMonth()).toBe(9)
    })
  })
})