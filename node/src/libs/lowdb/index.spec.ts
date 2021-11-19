// https://github.com/typicode/lowdb
import path from 'path'
import low from 'lowdb' // lowdb 3.0.0 在 ts 中用有问题。。。
import FileSync from 'lowdb/adapters/FileSync.js'

const db: low.LowdbSync<{
  name: string,
  list: number[]
}> = low(new FileSync(path.resolve(__dirname,'./db.json')))

describe('lowdb', () => {
  beforeAll(() => {
    db.defaults({
      name: 'Joel',
      list: []
    }).write()
  })

  // 重置为初始值
  afterEach(() => {
    db
      .set('name', 'Joel')
      .set('list', [])
      .write()
  })

  test('default value', () => {
    expect(db.get('name').value()).toBe('Joel')
    expect(db.get('list').value()).toEqual([])
  })

  test('add', () => {
    db.get('list').push(1).push(2).write()
    expect(db.get('list').value()).toEqual([1, 2])
  })

  test('find', () => {
    db.set('list', [1, 2, 3, 4]).write()
    expect(db.get('list').filter(item => item > 2).value()).toEqual([3, 4])
    expect(db.get('list').find(item => item === 2).value()).toEqual(2)
    expect(db.get('list').find(item => item === -1).value()).toEqual(undefined)
  })

  test('remove', () => {
    db.set('list', [1, 2, 3, 4]).write()
    db.get('list').remove((item: number) => item % 2 === 0).write()
    expect(db.get('list').value()).toEqual([1, 3])
  })
})