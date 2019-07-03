import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { AnimationService } from '../../../core/services/animation.service';
@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {


  constructor(private auth: AuthenticationService, private animate: AnimationService) { }

  ngOnInit() {
  }
}