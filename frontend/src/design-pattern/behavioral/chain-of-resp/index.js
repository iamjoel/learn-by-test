export class Rubbish {
  constructor(name, canBeRecycled) {
    this.name = name;
    this.canBeRecycled = canBeRecycled
  }
}

export class RubbishHandler {
    constructor() {
        this.handler = new RecycleRubbishHandler()
        this.handler.setNext(new NoRecycleRubbishHandler())
    }
    handle(rubbish) {
        return this.handler.handle(rubbish)
    }
}

class RecycleRubbishHandler {
    setNext(handler) {
        this.nextHandler = handler
    }
    handle(rubbish) {
        if(rubbish.canBeRecycled) {
            return 'RecycleRubbishHandler handled'
        }
        if(this.nextHandler) {
            return this.nextHandler.handle(rubbish)
        }
        throw new Error('can not handle')
    }
}

class NoRecycleRubbishHandler {
    setNext(handler) {
        this.nextHandler = handler
    }
    handle(rubbish) {
        if(!rubbish.canBeRecycled) {
            return 'NoRecycleRubbishHandler handled'
        }
        if(this.nextHandler) {
            return this.nextHandler.handle(rubbish)
        }
        throw new Error('can not handle')
    }
}