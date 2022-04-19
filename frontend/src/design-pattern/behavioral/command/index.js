export class Light {
  constructor() {
    this.isOn = false;
  }

  on() {
    this.isOn = true;
  }

  off() {
    this.isOn = false;
  }
}

export class CommandOn {
    constructor(light) {
        this.light = light;
    }
    
    execute() {
        this.light.on();
    }
}

export class CommandOff {
    constructor(light) {
        this.light = light;
    }
    
    execute() {
        this.light.off();
    }
}