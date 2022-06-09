import { formatFromNow } from './util'

describe('formatFromNow', () => {
  test('formatFromNow', () => {
    expect(formatFromNow(Date.now())).toBe('刚刚')
    expect(formatFromNow(Date.now() - 3 * 1000)).toBe('3秒前')
    expect(formatFromNow(Date.now() - 3 * 60 * 1000)).toBe('3分钟前')
    expect(formatFromNow(Date.now() - 3 * 60 * 60 * 1000)).toBe('3小时前')
    expect(formatFromNow(Date.now() - 2 * 24 * 60 * 60 * 1000)).toBe('2天前')
  })
})