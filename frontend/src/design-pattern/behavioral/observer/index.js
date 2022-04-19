export class RSS {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs.id !== observer.id);
  }

  notify(msg) {
    this.observers.forEach(observer => observer.handle(msg));
  }
}

let id = 1
export class User {
    constructor(name, msgBox) {
        this.name = name;
        this.msgBox = msgBox;
        this.id = id;
        id++;
    }
    handle(msg) {
        this.msgBox.push(`${this.name} received ${msg}`);
    }
}