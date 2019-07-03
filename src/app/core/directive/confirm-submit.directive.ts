import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[confirmsubmit]'
})
export class ConfirmSubmitDirective {
  @Input() prompt = 'Are you sure?';
  @Input() functionToRun = () => { };
  constructor() { }
  @HostListener('click')
  confirm() {
    if (window.confirm(this.prompt)) {
      this.functionToRun();
    }
  }
}