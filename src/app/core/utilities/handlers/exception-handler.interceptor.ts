
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: "root" })
export class ExceptionHandlerInterceptor implements ErrorHandler {
  constructor(private toast: ToastrService) { }
  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {

    } else {
let msg =      error.message ? 
           error.message : 
           error.toString();
      this.toast.error("sdf");
      // // Client Error
      // message = errorService.getClientErrorMessage(error);
      // notifier.showError(message);
    }
    // Always log errors
    // logger.logError(message, stackTrace);
    console.error(error);
  }

}