import { Injectable, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  toasts: any[] = [];
  private isShowPageLoader = new Subject<boolean>();
  private notifyOption = {
    classname: 'bg-danger text-light',
    delay: 15000
  }
  constructor(private modalService: NgbModal) { }

  ShowPageLoader(EnableLoader: boolean) {
    this.isShowPageLoader.next(EnableLoader);
  }
  PageLoaderInit(): Observable<boolean> {
    return this.isShowPageLoader.asObservable();
  }
  OpenPopup(content): void {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop', size: 'sm', centered: true })
      .result.then((result) => {
        alert("modal.close " + result);
      }, (reason) => {
        alert(" modal.dismiss " + reason);
      });
  };

  Notify(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    this.toasts.push({ textOrTpl, ...options });
  }

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...this.notifyOption });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

}