// https://github.com/nuysoft/Mock/wiki
import Mock from 'mockjs'
const Random = Mock.Random
describe('mockjs', () => {
  // https://github.com/nuysoft/Mock/wiki/Basic
  test('mock different types', () => {
    const booleanValue = Random.boolean()
    expect(booleanValue === true || booleanValue === false).toBe(true)

    const naturalValue = Random.natural()
    expect(naturalValue >= 0).toBe(true)

    const integerValue = Random.integer(0, 100)
    expect(integerValue >= 0 && integerValue <= 100).toBe(true)

    const guid = Random.guid()
    expect(/^[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}$/.test(guid)).toBe(true)

    const firstName = Random.first()
    expect(/^[A-Z][a-z]+$/.test(firstName)).toBe(true)

    const name = Random.name()
    expect(/^[A-Z][a-z]+ [A-Z][a-z]+$/.test(name)).toBe(true)

    // 中文名
    const cnName = Random.cname()
    expect(/^[\u4E00-\u9FA5]{2,4}$/.test(cnName)).toBe(true)

    const email = Random.email()
    expect(/^.+@.+?$/.test(email)).toBe(true)

    const color = Random.color()
    expect(/^#[0-9a-fA-F]{6}$/.test(color)).toBe(true)

    const sentence = Random.sentence(3)
    expect(sentence.split(' ').length >= 3).toBe(true)

    const csentence = Random.csentence(3)
    expect(csentence.split('').length >= 3).toBe(true)
  })
})
