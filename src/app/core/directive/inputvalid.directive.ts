import { Directive, HostBinding, Inject, Input, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  //  exportAs: 'TextInput',
  selector: '[inputValid]'
})
export class TextInputDirective {
  @Input() IsSubmitting: boolean = false;
  constructor(@Self() private ngControl: NgControl) {
    //alert(this.IsSubmitting);
  }

  //is-invalid
  get Invalid() {
    return (
      (this.IsSubmitting && this.ngControl.errors) || ((this.ngControl.dirty || this.ngControl.touched) && this.ngControl.errors));
  }

  @HostBinding("class.is-invalid")
  get InvalidCss() {
    return this.Invalid;
  }
}