export class Originator {
  constructor (value) {
    this.value = value
  }

  restore () {
    return this.value
  }
}

export class History {
  constructor () {
    this.values = []
  }

  add (memento) {
    this.values.push(memento)
  }

  go (index) {
    return this.values[index]
  }
}
