import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
let AuthenticationErrorInterceptor = class AuthenticationErrorInterceptor {
    // tslint:disable-next-line: no-any
    intercept(request, next) {
        return next.handle(request).pipe(retry(1), catchError((error) => {
            if (error.status === 401) {
                // refresh token
            }
            else {
                return throwError(error);
            }
        }));
    }
};
AuthenticationErrorInterceptor = __decorate([
    Injectable()
], AuthenticationErrorInterceptor);
export { AuthenticationErrorInterceptor };
//# sourceMappingURL=authentication-error.interceptor.js.map