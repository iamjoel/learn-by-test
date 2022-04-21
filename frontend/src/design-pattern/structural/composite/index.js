export class Computer {
  constructor () {
    this.hardWares = []
  }

  addPart (part) {
    this.hardWares.push(part)
  }

  getPrice () {
    return this.hardWares.reduce((acc, part) => acc + part.getPrice(), 0)
  }
}

class HardWare {
  constructor (name, price) {
    this.name = name
    this.price = price
  }

  getPrice () {
    return this.price
  }
}

export class CPU extends HardWare {
  constructor (price) {
    super('CPU', price)
  }
}

export class Memory extends HardWare {
  constructor (price) {
    super('Memory', price)
  }
}
