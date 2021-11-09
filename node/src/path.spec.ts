import path from 'path'

describe('path', () => {
  // beforeAll(() => {
  //   console.log(`
  //     被执行的 js 所在文件夹的绝对路径: ${__dirname}
  //     被执行的 js 的绝对路径: ${__filename}
  //     运行 node 命令时所在的文件夹的绝对路径: ${process.cwd()}
  //   `)
  // })
  test('路径解析', () => {
    const pathInfo = path.parse('/home/user/dir/file.txt')
    expect(pathInfo).toEqual({
      root: '/',
      dir: '/home/user/dir',
      base: 'file.txt',
      ext: '.txt',
      name: 'file' 
    })
  })

  test('路径拼接', () => {
    const joinedPath = path.join('/foo', 'bar', 'baz/asd', 'quux', '..')
    expect(joinedPath).toBe('/foo/bar/baz/asd')
  })

  test('路径 normalize', () => {
    expect(path.normalize('/foo/bar///baz/asd/quux/..')).toBe('/foo/bar/baz/asd')
  })
})