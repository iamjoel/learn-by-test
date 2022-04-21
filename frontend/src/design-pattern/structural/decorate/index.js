export class Car {
  constructor (speed) {
    this.speed = speed
  }

  getSpeed () {
    return this.speed
  }

  canFly () {
    return false
  }
}

export class CarWithExtraEngine {
  constructor (car) {
    this.car = car
  }

  getSpeed () {
    return this.car.getSpeed() + 10
  }
}

export class CarWithTurbo {
  constructor (car) {
    this.car = car
  }

  getSpeed () {
    return this.car.getSpeed() + 50
  }
}

export class CarCanFly {
  constructor (car) {
    this.car = car
  }

  canFly () {
    return true
  }
}
