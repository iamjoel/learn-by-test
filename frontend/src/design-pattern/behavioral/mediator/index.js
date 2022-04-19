export class WTO {
    static msg = []
    static receiveMsg = (msg) => {
        this.msg.push(msg)
    }
}

export class Country {
    constructor(name) {
        this.name = name
    }
    sendMsg(msg) {
        WTO.receiveMsg(`[${this.name}]: ${msg}`)
    }
}