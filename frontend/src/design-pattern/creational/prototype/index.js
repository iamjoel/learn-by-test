class Cat {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  clone () {
    return new Cat(this.name, this.age)
  }
}

export default Cat
