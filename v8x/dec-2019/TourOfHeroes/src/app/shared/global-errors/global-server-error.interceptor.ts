import {
  HttpErrorResponse, HttpEvent, HttpHandler,
  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// One traditional way of handling errors in Angular is to provide an ErrorHandler class.
// This class can be extended to create your own global error handler. This is also a useful
// way to handle all errors that occur, but is mostly useful for tracking error logs. For
// reference, you can check our earlier tutorial on how to use ErrorHandler in Angular 2+.

// By implementing error handling in HttpClient or HttpInterceptor, you can work directly with
// all HTTP requests in your application, providing the ability to transform the request, retry
// it, and more. Therefore, ErrorHandler is useful for more generic error handling, but
// HttpInterceptor provides a much more robust way to handle errors related to the server and network.

@Injectable()
export class GlobalServerErrorInterceptor implements HttpInterceptor {

  // tslint:disable-next-line: no-any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
        // if (error.status === 401) {
        //   // refresh token
        //   console.log('refresh user token');
        // } else {
        //   return throwError(error);
        // }
      })
    );
  }
}
