import { Country, WTO } from '.'

describe('mediator', () => {
  test('country communicate', () => {
    const country1 = new Country('China')
    const country2 = new Country('USA')
    const country3 = new Country('Japan')

    country1.sendMsg('hello')
    country2.sendMsg('hi')
    country3.sendMsg('hey')

    expect(WTO.msg).toEqual(['[China]: hello', '[USA]: hi', '[Japan]: hey'])
  })
})
