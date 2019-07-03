import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputDirective } from './inputvalid.directive';
import { ValidationErrorDirective } from './validation-error.directive';
import { ConfirmSubmitDirective } from './confirm-submit.directive'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextInputDirective, ValidationErrorDirective, ConfirmSubmitDirective],
  exports: [TextInputDirective,ValidationErrorDirective,ConfirmSubmitDirective]
})
export class AppDirectivesModule { }