import { Component, OnInit, TemplateRef } from '@angular/core';
import { AnimationService } from '../../../core/services/animation.service';
@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css'],
  host: { '[class.ngb-toasts]': 'true' }
})
export class NotifierComponent implements OnInit {

  constructor(public animate: AnimationService) { }
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
  ngOnInit() {
  }

}