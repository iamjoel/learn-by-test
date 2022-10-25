import fs from 'fs'
import path from 'path'

describe('fs', () => {
  test('读文件', () => {
    const filePath = path.resolve(__dirname, './files/article.txt')
    const buff = fs.readFileSync(filePath)
    const content = buff.toString()
    expect(content).toBe('一篇文章')
  })

  test('写文件: 覆盖内容', () => {
    const filePath = path.resolve(__dirname, './files/output.txt')
    fs.writeFileSync(filePath, 'abc')
    let content = fs.readFileSync(filePath).toString()
    expect(content).toBe('abc')
    fs.writeFileSync(filePath, 'def')
    content = fs.readFileSync(filePath).toString()
    expect(content).toBe('def')
    // 用 fs-extra 方便的 1. 确保文件存在。 2. 方便的写流
    // import fs from 'fs-extra'
    // await fs.outputFile(`output/${fileName}.xls`, buffer|content)
  })

  test('写文件: 追加内容', () => {
    const filePath = path.resolve(__dirname, './files/append.txt')
    fs.writeFileSync(filePath, '')

    fs.appendFileSync(filePath, 'abc')
    fs.appendFileSync(filePath, '123')
    const content = fs.readFileSync(filePath).toString()
    expect(content).toBe('abc123')
  })
})