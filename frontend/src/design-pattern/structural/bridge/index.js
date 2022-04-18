// 接口
// class Draw {
//     draw(x, y) {
//         return `draw: ${x}, ${y}`
//     } 
// }

export class RedCircle {
    draw(x, y) {
        return `(${x},${y}): red circle`
    }
}

export class GreenCircle {
    draw(x, y) {
        return `(${x},${y}): green circle`
    }
}

export class Circle {
    constructor(x, y, shape) {
        this.x = x
        this.y = y
        this.shape = shape
    }

    draw() {
        return this.shape.draw(this.x, this.y)
    }
}