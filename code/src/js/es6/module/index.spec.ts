import b, {a, hello, aa, bb} from './demo'

describe('JavaScript Modules', () => {
  test('JavaScript Modules', () => {
    expect(a).toBe('a')
    expect(hello()).toBe('hello')
    expect(b).toBe('b')

    // 导出从其他文件导入的
    expect(aa).toBe('aa')
    expect(bb).toBe('bb')
  })
})