function animalMaker (type, name) {
  if (type === 'dog') {
    return dogFactory(name)
  }
  return catFactory(name)
}

function dogFactory (name) {
  return new Dog(name)
}

class Dog {
  constructor (name) {
    this.name = name
  }

  greet () {
    return 'Woof'
  }
}

function catFactory (name) {
  return new Cat(name)
}

class Cat {
  constructor (name) {
    this.name = name
  }

  greet () {
    return 'Miao'
  }
}

export default animalMaker
