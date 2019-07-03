import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoggedInUserModel, SignInFormModel } from '../models/models.class';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<LoggedInUserModel>;
  //public ContextUser: Observable<LoggedInUserModel>;
  private apiUrl = "https://www.mocky.io/v2/";

  private authStep: BehaviorSubject<string> = new BehaviorSubject<string>("SignIn");

  private AuthFlow: {
    SignIn: {
      Init:"SignIn"

    },
    SignUn: {

    }
  };



  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoggedInUserModel>(JSON.parse(localStorage.getItem('appusercontext')));
    // this.ContextUser = this.currentUserSubject.asObservable();
  }

  public get AuthStep() { return this.authStep.value; }
  AuthStepUpdate =(Step:string)=> this.authStep.next(Step);
  public get GetLoggedInUser(): LoggedInUserModel {
    return this.currentUserSubject.value;
  }
  SignOut = () => {
    localStorage.removeItem('appusercontext');
    this.currentUserSubject.next(null);
  }
  SignIn(user: SignInFormModel): Observable<LoggedInUserModel> {
    return this.http.get<LoggedInUserModel>(this.apiUrl + "5d1484ca2f00007735c4f15a")
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('appusercontext', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          }
        })
      );
  }
}