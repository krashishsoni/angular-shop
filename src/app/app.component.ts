import { Component } from '@angular/core';
import { AnimationService } from './core/services/animation.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from './core/services/authentication.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppDomainService } from './core/services/app-domain.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private animate: AnimationService, private toastr: ToastrService,
    private http: HttpClient, private modalService: NgbModal
    , private app: AppDomainService,private auth:AuthenticationService) {



  }

  showStandard() {
    this.animate.show('I am a standard toast');
  }
  showSuccess() {
    this.animate.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    this.animate.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }
  name = 'Angular';
  ShowLoader() {
    // this.animate.ShowPageLoader(true);
    this.app.PortalInfoGet().subscribe(x => { this.name = x.Name; }
    );
    // this.toastr.show('Hello world!', 'Toastr fun!');
    // this.http.get('urlhere').subscribe();
    // throw new Error('My Pretty Error');
  }
  closeResult: string;
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
