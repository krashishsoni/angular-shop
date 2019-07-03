import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
     NgbModule
  ],
  exports: [CartHeaderComponent],
  declarations: [CartHeaderComponent]
})
export class ShoppingCartModule { }