export class Clothes {
  constructor(name, orgPrice) {
    this.name = name;
    this.orgPrice = orgPrice
    this.discount = new Discount()
    this.coupon = new Coupon()
    this.fee = new Fee()
  }

  getSalePrice() {
    let price = this.orgPrice
    price = this.discount.calc(price)
    price = this.coupon.calc(price)
    price = this.fee.calc(price)
    return price
  }
}

class Discount {
  calc(price) {
    return price * 0.9; 
  }
}

// 满减
class Coupon {
  calc(price) {
    if(price > 100) {
        return price - 10
    }
    return price; 
  }
}

// 小费
class Fee {
  calc(price) {
    return price + 5;
  }
}