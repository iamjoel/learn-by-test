class CookVegetable {
  constructor (name) {
    this.name = name
  }

  cook () {
    const steps = []
    steps.push(this.pick())
    steps.push(this.wash())
    steps.push(this.cut())
    steps.push(this.fry())
    steps.push(this.toDish())
    return steps
  }

  pick () {
    return `Pick ${this.name}`
  }

  wash () {
    return `Wash ${this.name}`
  }

  cut () {
    return `Cut ${this.name}`
  }

  fry () {
    return `Fry ${this.name} 10 minutes`
  }

  toDish () {
    return `Put ${this.name} in dish`
  }
}

export class CookCabbage extends CookVegetable {
  constructor () {
    super('cabbage')
  }

  cut () {
    return `Cut ${this.name} into pieces`
  }

  fry () {
    return `Fry ${this.name} 20 minutes`
  }
}

export class CookFrenchBean extends CookVegetable {
  constructor () {
    super('french bean')
  }

  fry () {
    return `Fry ${this.name} 25 minutes`
  }
}
