import { Injectable } from '@angular/core';
import { eCartModel, eCartItemModel } from '../models/ecart-models';
import { BehaviorSubject } from 'rxjs';
import { find, filter } from 'rxjs/operators';
@Injectable()
export class ECartService {
  public eCartItems: BehaviorSubject<eCartModel> = new BehaviorSubject<eCartModel>(new eCartModel());
  constructor() {
    this.UserCartInit();
  }
  private UserCartInit() {
    console.log("GetUserCart");
    if (!this.eCartItems.value.Id) {
      console.log("no cart found created new ");
      let oe: eCartModel = new eCartModel();
      this.eCartItems.next(oe);
    }
  }

  get GetUserCart() { return this.eCartItems.value; }

  AddToCart(ProductId: number): void {
    console.log(ProductId);
    let product = this.GetUserCart.Items.find(x => x.Id == ProductId);
    if (product) {
      product.Quantity += 1;

    } else {
      let prod: eCartItemModel = new eCartItemModel();
      if (ProductId == 1) {
        prod.Id = 1;
        prod.Name = "Product 1";
        prod.Quantity = 1;
        prod.BasePrice = 1000;
      } else {
        prod.Id = 0;
        prod.Name = "Product 2";
        prod.Quantity = 1;
        prod.BasePrice = 2000;
      }
      this.GetUserCart.Items.push(prod);
    }
  }

  RemoveFromCart(productId: number) {

    let products = this.GetUserCart.Items.filter(x => x.Id != productId);
    this.GetUserCart.Items = products;
    //  this.eCartItems.next(this.eCartItems.value);
  }

}