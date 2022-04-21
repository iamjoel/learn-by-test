import { ColorFactory } from '.'

describe('flyweight', () => {
  test('flyweight color', () => {
    const colorFactory = new ColorFactory()
    expect(colorFactory.getColors()).toEqual({})

    colorFactory.add('red')
    expect(colorFactory.getColor('red').name).toBe('red')
    expect(Object.keys(colorFactory.getColors()).length).toBe(1)

    colorFactory.add('blue')
    expect(colorFactory.getColor('blue').name).toBe('blue')
    expect(Object.keys(colorFactory.getColors()).length).toBe(2)
  })
})
