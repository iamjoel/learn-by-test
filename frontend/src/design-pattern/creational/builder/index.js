class CatBuilder {
  constructor () {
    this.cat = new Cat()
  }

  setName (name) {
    this.cat.name = name
    return this
  }

  setGender (gender) {
    this.cat.gender = gender
    return this
  }

  setColor (color) {
    this.cat.color = color
    return this
  }

  build () {
    return this.cat
  }
}

class Cat {
  constructor () {
    this.name = 'unknown'
    this.gender = 'unknown'
    this.color = 'unknown'
  }
}

export default CatBuilder
