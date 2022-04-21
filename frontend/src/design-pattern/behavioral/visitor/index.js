export function equipmentVisitor (equipment) {
  if (equipment instanceof CPU) {
    return `${equipment.name} is calculate center`
  }
  if (equipment instanceof Keyboard) {
    return `${equipment.name} is input device`
  }
  return 'unknown equipment'
}
class Equipment {
  constructor (name) {
    this.name = name
  }

  accept (visitor) {
    visitor.visit(this)
  }
}

export class CPU extends Equipment {
  constructor () {
    super('CPU')
  }
}

export class Keyboard extends Equipment {
  constructor () {
    super('Keyboard')
  }
}
