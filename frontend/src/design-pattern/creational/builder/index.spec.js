import CatBuilder from './index'

describe('builder', () => {
  test('builder set feature', () => {
    const builder = new CatBuilder()
    builder.setName('Tom')
    builder.setGender('male')
    builder.setColor('red')
    const cat = builder.build()

    expect(cat.name).toBe('Tom')
    expect(cat.gender).toBe('male')
    expect(cat.color).toBe('red')
  })
})
