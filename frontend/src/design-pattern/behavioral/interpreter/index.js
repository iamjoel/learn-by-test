export class Sum {
  constructor (left, right) {
    this.left = left
    this.right = right
  }

  interpret () {
    return this.left.interpret() + this.right.interpret()
  }
}

export class Num {
  constructor (val) {
    this.val = val
  }

  interpret () {
    return this.val
  }
}
