import { Component, OnInit } from '@angular/core';
import { ECartService } from '../../services/e-cart.service';
@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {

  constructor(private ecart: ECartService) { }

  ngOnInit() {
  }
  RemoveItem(item: any) {
    this.ecart.RemoveFromCart(item.Id);
  }
}