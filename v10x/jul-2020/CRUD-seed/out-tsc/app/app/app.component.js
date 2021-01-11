import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as HttpErrorSelectors from './routes/http-error/slice/selectors';
import * as LoginSelectors from './routes/login/slice/selectors';
let AppComponent = class AppComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.destroy$ = new Subject();
        // tslint:disable-next-line: typedef
        this.title = 'CRUDSeed: Products CRUD';
    }
    ngOnInit() {
        this.store.select(HttpErrorSelectors.selectHttpError).pipe(takeUntil(this.destroy$))
            .subscribe((httpError) => {
            if (httpError) {
                this.router.navigate(['/http-error']);
            }
        });
        this.store.select(LoginSelectors.selectLoginUser).pipe(takeUntil(this.destroy$))
            .subscribe((user) => {
            if (!user) {
                this.router.navigate(['/']);
                console.log('no user');
            }
            else {
                this.router.navigate(['/product-list']);
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'crud-seed-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map