import animalMaker from './index'

describe('abstract factory', () => {
  test('make different animal', () => {
    const dog = animalMaker('dog', 'huang')
    expect(dog.name).toBe('huang')
    expect(dog.greet()).toBe('Woof')

    const cat = animalMaker('cat', 'hong')
    expect(cat.name).toBe('hong')
    expect(cat.greet()).toBe('Miao')
  })
})
