class MyArray {
  constructor (arr) {
    this.index = 0
    this.list = arr
  }

  next () {
    const value = this.list[this.index]
    const index = this.index
    this.index++
    return [index, value]
  }

  hasNext () {
    return this.index < this.list.length
  }
}

export default MyArray
