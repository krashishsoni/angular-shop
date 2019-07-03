import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component'
import { NgxLoadingModule } from 'ngx-loading';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierComponent } from './notifier/notifier.component';
//import { NotifierService } from './notifier/notifier.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppDirectivesModule } from '../../core/directive/app-directives.module';
import { OtpComponent } from './otp/otp.component';
import { WebHeaderComponent } from './web-header/web-header.component';
import { LoginNameContainerComponent } from './login-name-container/login-name-container.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { PipesCollectionModule } from '../../core/pipes/pipe-collection.module';
// import { ContactPipe } from '../../core/pipes/formaters.pipe';
@NgModule({
  imports: [
    CommonModule,
    NgxLoadingModule,
    NgbModule,
    ReactiveFormsModule,
    AppDirectivesModule,
    PipesCollectionModule
  ],
  exports: [LoaderComponent, LoginComponent, NotifierComponent, OtpComponent, WebHeaderComponent, LoginNameContainerComponent, LanguageSwitcherComponent],
  declarations: [LoaderComponent, LoginComponent, NotifierComponent, OtpComponent, WebHeaderComponent, LoginNameContainerComponent, LanguageSwitcherComponent],
  // providers: [NotifierService]
})
export class SharedComponentsModule { }