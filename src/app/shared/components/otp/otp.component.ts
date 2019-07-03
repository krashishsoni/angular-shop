import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { AnimationService } from '../../../core/services/animation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  Submitting: boolean = false;
  formOTP: FormGroup = new FormGroup({
    UserOTP: new FormControl('', Validators.required),
  });

  constructor(private auth: AuthenticationService, private animate: AnimationService) {

  }
  get ctrl() { return this.formOTP.controls; }

  ngOnInit() {
  }
  onSubmit() {
    this.Submitting = true;
    if (this.formOTP.invalid)
      return;
    // this.auth.SignIn(this.formSignin.value).subscribe(
    //   s =>{console.log("User", s);this.auth.AuthStepUpdate("OTP");}

    // );
  }
}