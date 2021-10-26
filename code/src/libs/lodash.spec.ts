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

  describe('_.random: 生成随机数', () => {
    test('随机整数', () => {
      const randomInt = _.random(0, 5)
      expect(Number.isInteger(randomInt)).toBe(true)
      expect(randomInt >= 0 && randomInt <= 5).toBe(true)
      // 默认值是 0，1
      expect(_.random() >=0 && _.random() <=1).toBe(true)
    })

    test('随机小数', () => {
      const randomFloat = _.random(0, 5, true)
      expect(Number.isInteger(randomFloat)).toBe(false)
      expect(randomFloat >= 0 && randomFloat <= 5).toBe(true)
    })
  })
})