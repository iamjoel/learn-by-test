class TrafficLight {
    constructor(name, nextStatus) {
        this.name = name
        this.nextStatus = nextStatus
    }
    
    next() {
        return new this.nextStatus()
    }

    getName() {
        return this.name
    }

    getAction() {
        return 'unknown'
    }
}

export class RedLight extends TrafficLight{
    constructor() {
        super('red', GreenLight)
    }

    getAction() {
        return 'stop'
    }
}

class YellowLight extends TrafficLight{
    constructor() {
        super('yellow', RedLight)
    }

    getAction() {
        return 'wait'
    }
}

class GreenLight extends TrafficLight{
    constructor() {
        super('green', YellowLight)
    }

    getAction() {
        return 'go'
    }
}