import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  handleError(error: HttpErrorResponse): void {
    console.log('error handler custom error is: ', error);
  }
}
