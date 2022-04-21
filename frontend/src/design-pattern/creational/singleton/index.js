class SuperMan {
  constructor (name) {
    if (typeof SuperMan.instance === 'object') {
      return SuperMan.instance
    }
    this.name = 'Joel'
    SuperMan.instance = this
    return this
  }
}

export default SuperMan
