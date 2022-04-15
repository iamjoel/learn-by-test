class BrowserFactory {
  static create(version) {
    switch(version) {
      case 2:
        return new Browser({
          supportFeature1: true,
          supportFeature2: true,
        });
      case 1:
        return new Browser({
          supportFeature1: true,
          supportFeature2: false,
        });
      default:
        return new Browser({
          supportFeature1: false,
          supportFeature2: false,
        });
    }
  }
}

class Browser {
  constructor({ supportFeature1, supportFeature2}) {
    this.supportFeature1 = supportFeature1;
    this.supportFeature2 = supportFeature2;
  }
}

export default BrowserFactory;
