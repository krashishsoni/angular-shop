import { Component, OnInit } from '@angular/core';
import { ECartService } from '../services/e-cart.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private ecart: ECartService) { }
  private test: boolean = false;
  ngOnInit() {
  }

  AddToCart() {
    this.ecart.AddToCart(this.test == true ? 1 : 0);
    this.test = !this.test;
  }
}