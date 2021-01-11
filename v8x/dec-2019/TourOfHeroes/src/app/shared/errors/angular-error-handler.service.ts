import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

// One traditional way of handling errors in Angular is to provide an ErrorHandler class.
// This class can be extended to create your own global error handler. This is also a useful
// way to handle all errors that occur, but is mostly useful for tracking error logs. For
// reference, you can check our earlier tutorial on how to use ErrorHandler in Angular 2+.

// By implementing error handling in HttpClient or HttpInterceptor, you can work directly with
// all HTTP requests in your application, providing the ability to transform the request, retry
// it, and more. Therefore, ErrorHandler is useful for more generic error handling, but
// HttpInterceptor provides a much more robust way to handle errors related to the server and network.

// Handling errors with HttpClient
@Injectable()
export class AngularErrorHandlerService implements ErrorHandler {

  handleError(error: HttpErrorResponse | Error | ErrorEvent): void {
    console.log('in error handler custom error type is: ' + '\n');
    if (error instanceof ErrorEvent) {
      console.log('log broad client side ErrorEvent occured');
    } else if (error instanceof Error) {
      console.log('log broad javascript exception (\'Error\') occured');
    } else {
      console.log('httperrorresponse is def handled in interceptors');
    }
  }
}
