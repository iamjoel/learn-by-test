class Color {
  constructor (name) {
    this.name = name
  }
}

export class ColorFactory {
  constructor () {
    this.colors = {}
  }

  add (name) {
    const color = this.colors[name]
    if (color) return color
    this.colors[name] = new Color(name)
    return this.colors[name]
  }

  getColor (name) {
    return this.colors[name]
  }

  getColors () {
    return this.colors
  }
};
