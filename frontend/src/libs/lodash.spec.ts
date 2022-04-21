import _ from 'lodash'
// https://lodash.com/
describe('Lodash', () => {
  test('_.cloneDeep: 深度拷贝', () => {
    const src = {
      name: 'Joel',
      info: {
        gender: 'M',
        hobby: ['coding', 'reading']
      }
    }

    const dest = _.cloneDeep(src)
    expect(src).toEqual(dest)
  })

  test('_.isEqual: 深度比较', () => {
    const src = {
      name: 'Joel',
      info: {
        gender: 'M',
        hobby: ['coding', 'reading']
      }
    }

    const dest = _.cloneDeep(src)
    const isSame = _.isEqual(src, dest)
    expect(isSame).toEqual(true)
  })

  test('_.curry: 柯里化', () => {
    const abc = function (a: any, b: any, c: any) {
      return [a, b, c]
    }
    const curried = _.curry(abc)

    expect(curried(1, 2, 3)).toEqual([1, 2, 3])
    expect(curried(1, 2)(3)).toEqual([1, 2, 3])
    expect(curried(1)(2)(3)).toEqual([1, 2, 3])
    expect(curried(1)(_, 3)(2)).toEqual([1, 2, 3])
  })

  test('_.flow: 按顺序调用一系列函数', () => {
    const sum = (a: number, b: number) => a + b
    const showRes = (num: number) => `res is ${num}`
    const sumAndShow = _.flow([sum, showRes])
    expect(sumAndShow(1, 2)).toBe('res is 3')
  })

  describe('_.random: 生成随机数', () => {
    test('随机整数', () => {
      const randomInt = _.random(0, 5)
      expect(Number.isInteger(randomInt)).toBe(true)
      expect(randomInt >= 0 && randomInt <= 5).toBe(true)
      // 默认值是 0，1
      expect(_.random() >= 0 && _.random() <= 1).toBe(true)
    })

    test('随机小数', () => {
      const randomFloat = _.random(0, 5, true)
      expect(Number.isInteger(randomFloat)).toBe(false)
      expect(randomFloat >= 0 && randomFloat <= 5).toBe(true)
    })
  })
})
