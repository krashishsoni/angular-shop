import { Component, ElementRef, ViewContainerRef, HostBinding, OnInit, Input } from '@angular/core';
import { NgControl,FormControl } from '@angular/forms';
@Component({
  selector: 'validation-error',
  template: `
  <div  *ngIf="Invalid">
    <div *ngIf="ctrl.errors.required">{{reqErrMsg}}</div>
      
                        </div>

                        `,

})
export class ValidationErrorDirective implements OnInit {
  @Input() ctrl: NgControl;
  @Input() IsSubmitting: boolean = false;
  @Input() reqErrMsg: string = "";

  constructor() {
  }
  ngOnInit() {
    //this.container.createEmbeddedView(this.template);
  }
  get Invalid() {
    return (
      (this.IsSubmitting && this.ctrl.errors) || ((this.ctrl.dirty || this.ctrl.touched) && this.ctrl.errors));
  }


  // get Invalid() {
  //   return (
  //     (this.IsSubmitting && this.errControl.errors) || ((this.errControl.dirty || this.errControl.touched) && this.errControl.errors));
  // }
  // @HostBinding('class.invalid-feedback')
  // get InvalidCss() {
  //   if (this.Invalid) {
  //     this.el.nativeElement.innerHTML = "ashish";
  //   } else {
  //     this.el.nativeElement.innerHTML = "";
  //   }
  //   return this.Invalid;
  // }

}