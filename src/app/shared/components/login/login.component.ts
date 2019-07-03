import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { AnimationService } from '../../../core/services/animation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formSignin: FormGroup = new FormGroup({
    UserName: new FormControl('', Validators.required,),
    Password: new FormControl('', Validators.required),
    RememberMe: new FormControl(false)
  });

  Submitting: boolean = false;
  //@Input() IsModel: boolean;
  constructor(private auth: AuthenticationService, private animate: AnimationService) {
    if (this.auth.GetLoggedInUser) {
      // this.router.navigate(['/']);
      console.log("user logged in need to redirect ")
    }
  }

  ngOnInit() {
  }
  get f() { return this.formSignin.controls; }

  onSubmit() {
    this.Submitting = true;
    if (this.formSignin.invalid)
      return;
    this.auth.SignIn(this.formSignin.value).subscribe(
      s =>{console.log("User", s);this.auth.AuthStepUpdate("OTP");}
      
    );
  }

  //REactinve FormControl


}