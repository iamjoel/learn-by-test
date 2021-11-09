import moment from 'moment'

describe('moment', () => {
  test('创建', () => {
    const now = new Date()
    expect(moment().year()).toBe(now.getFullYear())
    //  ISO 8601 format
    expect(moment('2021-05-12').year()).toBe(2021)
    expect(moment('20210512').year()).toBe(2021)
    // 非 ISO 8601 format
    expect(moment('2021/05/12', 'YYYY/MM/DD').year()).toBe(2021)
  })
  test('格式化', () => {
    const date = new Date('2021/5/12')
    expect(moment(date).format('YYYY-MM-DD HH:mm:ss')).toBe('2021-05-12 00:00:00')

    date.setHours(13)
    // 24 小时制
    expect(moment(date).format('HH')).toBe('13')
    // 12 小时制
    expect(moment(date).format('hh')).toBe('01')
    expect(moment(date).format('h')).toBe('1')
  })

  test('取值&设值', () => {
    const date = moment('2021-05-12')
    date.add(1, 'day')
    expect(date.date()).toBe(13)

    date.add(-1, 'day')
    expect(date.date()).toBe(12)

    expect(date.month()).toBe(4)
    date.add(1, 'month')
    expect(date.month()).toBe(5)

    date.startOf('month')
    expect(date.date()).toBe(1)
    date.month(0)
    date.endOf('month')
    expect(date.date()).toBe(31)

    // 闰年
    expect(moment('2020-01-01').isLeapYear()).toBe(true)
    expect(moment('1900-01-01').isLeapYear()).toBe(false)
    expect(moment('2021-01-01').isLeapYear()).toBe(false)
  })

  test('比较', () => {
    expect(moment('2021-05-12').isAfter(moment('2021-03-12'))).toBe(true)
    expect(moment('2021-05-12').isSameOrAfter(moment('2021-05-12'))).toBe(true)

    expect(moment('2021-05-12').isBefore(moment('2021-07-12'))).toBe(true)

    expect(moment('2021-05-12').isSame(moment('2021-05-12 03:10:10'))).toBe(false)
    expect(moment('2021-05-12').isSame(moment('2021-05-12 03:10:10'), 'day')).toBe(true)
  })
})