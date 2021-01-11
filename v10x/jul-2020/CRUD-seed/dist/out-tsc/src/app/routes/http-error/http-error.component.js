import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as LoginActions from '../../routes/login/slice/actions';
import * as HttpErrorSelectors from './slice/selectors';
let HttpErrorComponent = class HttpErrorComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.destroy$ = new Subject();
        // tslint:disable-next-line: no-inferrable-types
        this.httpErrorMessage = 'please logout first';
    }
    ngOnInit() {
        this.store.select(HttpErrorSelectors.selectHttpError).pipe(takeUntil(this.destroy$))
            .subscribe((httpError) => {
            if (httpError) {
                console.log(httpError);
                this.httpError = httpError;
                this.httpErrorMessage = httpError.message;
            }
        });
    }
    logout() {
        this.store.dispatch(new LoginActions.LogoutRequestAction());
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
};
HttpErrorComponent = __decorate([
    Component({
        selector: 'crud-seed-http-error',
        templateUrl: './http-error.component.html',
        styleUrls: ['./http-error.component.scss']
    })
], HttpErrorComponent);
export { HttpErrorComponent };
//# sourceMappingURL=http-error.component.js.map