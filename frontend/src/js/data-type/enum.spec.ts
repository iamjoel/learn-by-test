/* eslint-disable no-unused-vars */
describe('枚举', () => {
  test('默认值: 从 0 开始递增', () => {
    enum weekDay {
      Monday,
      Tuesday,
      Wednesday
    }

    expect(weekDay.Monday).toBe(0)
    expect(weekDay.Tuesday).toBe(1)
    expect(weekDay.Wednesday).toBe(2)
  })

  test('指定值', () => {
    enum weekDay {
      Monday = 'mon',
      Tuesday = 'tues',
      Wednesday = 'wed'
    }

    expect(weekDay.Monday).toBe('mon')
    expect(weekDay.Tuesday).toBe('tues')
    expect(weekDay.Wednesday).toBe('wed')
  })
})
