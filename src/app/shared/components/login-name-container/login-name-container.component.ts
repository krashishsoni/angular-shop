import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { AnimationService } from '../../../core/services/animation.service';

@Component({
  selector: 'app-login-name-container',
  templateUrl: './login-name-container.component.html',
  styleUrls: ['./login-name-container.component.css']
})
export class LoginNameContainerComponent implements OnInit {
  
  constructor(private auth: AuthenticationService, private animate: AnimationService) { }

  ngOnInit() {
  }
  

}