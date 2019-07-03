export class eCartModel {
  Id: string;
  Items: Array<eCartItemModel> = [];
  get TotalAmount() {
    let totalAmount: number = 0;
    this.Items.forEach(x => {
      totalAmount += (x.Quantity * x.BasePrice);
    })
    return totalAmount;
  }
  get TotalQuantity() {
    let totalAmount: number = 0;
    this.Items.forEach(x => {
      totalAmount += x.Quantity;
    })
    return totalAmount;
  }
}

export class eCartItemModel {
  get Price(){
    return this.Quantity*this.BasePrice;
  }
  Id: number;
  Name: string;
  Quantity: number;
  BasePrice: number;
  Thumbnail: string = "data:image/png;base64,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";
}