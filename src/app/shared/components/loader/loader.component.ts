import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../../core/services/animation.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isShow: boolean;
  constructor(private animate: AnimationService) { }

  ngOnInit() {
    this.animate.PageLoaderInit().subscribe(x => { this.isShow = x });
  }

}