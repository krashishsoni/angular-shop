import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPipe } from './formaters.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactPipe],
  exports: [ContactPipe]
})
export class PipesCollectionModule { }