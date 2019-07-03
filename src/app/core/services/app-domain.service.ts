import { Injectable } from '@angular/core';
import { WebPortal } from '../models/models.class';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class AppDomainService {
  private webPortal = new BehaviorSubject<WebPortal>(new WebPortal());
  private apiUrl = "https://www.mocky.io/v2/";
  constructor(private http: HttpClient) {


  }
  PortalInfoGet(): Observable<WebPortal> {
    console.log("PortalInfoGet")
    if (!this.webPortal.value.Name) {
      console.log("calling web info")
      this.http.get<WebPortal>(this.apiUrl + "5d11beea310000a33608cde4").subscribe(
        res => {
          this.webPortal.next(res);
        },
      )
    }
    return this.webPortal;
  }

    PortalInfoGet1(): Observable<WebPortal> {
     return this.http.get<WebPortal>(this.apiUrl + "5d11beea310000a33608cde4");
      
    //   .subscribe(
    //     res => {
    //       this.webPortal.next(res);
    //     },
    //   )
    // }
    // return this.webPortal;
  }

}