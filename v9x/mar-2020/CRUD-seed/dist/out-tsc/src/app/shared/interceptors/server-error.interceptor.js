import { __decorate } from "tslib";
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import * as HttpErrorActions from 'src/app/routes/http-error/slice/actions';
import * as AppHttpLoadingActions from '../app-http-loading/slice/actions';
// One traditional way of handling errors in Angular is to provide an ErrorHandler class.
// This class can be extended to create your own global error handler. This is also a useful
// way to handle all errors that occur, but is mostly useful for tracking error logs. For
// reference, you can check our earlier tutorial on how to use ErrorHandler in Angular 2+.
// By implementing error handling in HttpClient or HttpInterceptor, you can work directly with
// all HTTP requests in your application, providing the ability to transform the request, retry
// it, and more. Therefore, ErrorHandler is useful for more generic error handling, but
// HttpInterceptor provides a much more robust way to handle errors related to the server and network.
let ServerErrorInterceptor = class ServerErrorInterceptor {
    constructor(store, notificationService) {
        this.store = store;
        this.notificationService = notificationService;
    }
    // tslint:disable-next-line: no-any
    intercept(request, next) {
        if (request instanceof HttpRequest) {
            console.log('--------> http HttpRequest dispatch loading spinner');
            this.store.dispatch(new AppHttpLoadingActions.StartLoadingAction());
        }
        return next.handle(request).pipe(retry(1), 
        // tslint:disable-next-line: no-any
        tap((event) => {
            if (event instanceof HttpResponse) {
                console.log('--------> http HttpResponse dispatch stop loading spinner');
                this.store.dispatch(new AppHttpLoadingActions.StopLoadingAction());
            }
        }), catchError((error) => {
            console.log('--------> http HttpErrorResponse dispatch stop loading spinner');
            this.store.dispatch(new AppHttpLoadingActions.StopLoadingAction());
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // A client-side htttp or network error occurred. Handle it accordingly.
                errorMessage = `Error: ${error.error.message}`;
                this.notificationService.showError('error.error.message');
            }
            else {
                // here an actual server response was received.
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                this.store.dispatch(new HttpErrorActions.HttpErrorAction({ httpError: error }));
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            return throwError(error);
        }));
    }
};
ServerErrorInterceptor = __decorate([
    Injectable()
], ServerErrorInterceptor);
export { ServerErrorInterceptor };
//# sourceMappingURL=server-error.interceptor.js.map