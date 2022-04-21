class TrafficLight {
  constructor (name, NextStatus) {
    this.name = name
    this.NextStatus = NextStatus
  }

  next () {
    return new this.NextStatus()
  }

  getName () {
    return this.name
  }

  getAction () {
    return 'unknown'
  }
}

export class RedLight extends TrafficLight {
  constructor () {
    super('red', GreenLight)
  }

  getAction () {
    return 'stop'
  }
}

class YellowLight extends TrafficLight {
  constructor () {
    super('yellow', RedLight)
  }

  getAction () {
    return 'wait'
  }
}

class GreenLight extends TrafficLight {
  constructor () {
    super('green', YellowLight)
  }

  getAction () {
    return 'go'
  }
}
