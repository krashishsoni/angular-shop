import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartModule } from './cart/shopping-cart.module';
import { ECartService } from './services/e-cart.service';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductcardComponent } from './productcard/productcard.component';
@NgModule({
  imports: [
    CommonModule,
    ShoppingCartModule
  ],
  exports: [ShoppingCartModule,ProductPageComponent],
  declarations: [ProductPageComponent, ProductcardComponent],
  providers: [ECartService]
})
export class EcommerceShoppingModule { }