import animalMaker from './index'

describe('abstract factory', () => {
  test('make dog', () => {
    const dog = animalMaker('dog', 'huang')
    expect(dog.name).toBe('huang')
    expect(dog.greet()).toBe('Woof')
  })

  test('make cat', () => {
    const cat = animalMaker('cat', 'hong')
    expect(cat.name).toBe('hong')
    expect(cat.greet()).toBe('Miao')
  })
})
