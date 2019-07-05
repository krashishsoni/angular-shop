import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { AdminModule } from './views/admin/admin.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { SharedComponentsModule } from './shared/components/sharedcomponents.module';
import { AuthenticationService } from './core/services/authentication.service';
import { AppDomainService } from './core/services/app-domain.service';
import { HttpErrorInterceptor, ExceptionHandlerInterceptor } from './core/utilities/handlers/utility-handler'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesCollectionModule } from './core/pipes/pipe-collection.module';
import { EcommerceShoppingModule } from './shopping/ecommerce-shopping.module';
// import { WebPortalClientService } from './core/webclient/web-portal-client.service';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({  positionClass: 'toast-bottom-right'
    ,easing:'slide' }), AppRoutingModule,
    FormsModule,
    AdminModule,
    SharedComponentsModule,
    NgbModule,
    EcommerceShoppingModule


  ],
//  exports: [NgbModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    ToastrService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    //{ provide: ErrorHandler, useClass: ExceptionHandlerInterceptor },

    AuthenticationService,
    AppDomainService,

    // WebPortalClientService
  ]
})
export class AppModule { }
