import walkThrough from './walk-through'
import path from 'path'

describe('walk through dir', () => {
  test('emit and handler', async () => {
    const res = await walkThrough(path.join(__dirname, './dir-for-test-workthrough'))
    const files = res
        .filter(item => !item.isDirectory)
        .map(item => item.name)
    expect(files).toEqual(['a.txt', 'c.sol', 'f.a'])
  })
})