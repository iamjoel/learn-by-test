import Cat from './index'

describe('prototype', () => {
  test('clone', () => {
    const cat1 = new Cat('Mimi', 1)
    const cat2 = cat1.clone()
    expect(cat1.name).toBe('Mimi')
    expect(cat2.name).toBe('Mimi')

    cat2.name = 'NaNa'
    expect(cat1.name).toBe('Mimi')
    expect(cat2.name).toBe('NaNa')
    expect(cat2 instanceof Cat).toBe(true)
  })
})
