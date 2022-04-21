import { Car, CarWithExtraEngine, CarWithTurbo, CarCanFly } from './index'

describe('decorate', () => {
  test('decorate car', () => {
    const car = new Car(100)
    expect(car.getSpeed()).toBe(100)

    const carWithExtraEngine = new CarWithExtraEngine(car)
    expect(carWithExtraEngine.getSpeed()).toBe(110)

    const carWithTurbo = new CarWithTurbo(carWithExtraEngine)
    expect(carWithTurbo.getSpeed()).toBe(160)

    expect(car.canFly()).toBe(false)
    const carCanFly = new CarCanFly(car)
    expect(carCanFly.canFly()).toBe(true)
  })
})
