import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as LoginActions from '../../routes/login/slice/actions';
import * as LoginSelectors from '../../routes/login/slice/selectors';
import * as FakeHttpErrorActions from '../../shared/fake-http-error/slice/actions';
let TopBarComponent = class TopBarComponent {
    constructor(store, http) {
        this.store = store;
        this.http = http;
    }
    ngOnInit() {
        this.user$ = this.store.select(LoginSelectors.selectLoginUser);
    }
    logout() {
        this.store.dispatch(new LoginActions.LogoutRequestAction());
    }
    causeHttpError() {
        this.store.dispatch(new FakeHttpErrorActions.FakeHttpErrorRequestAction());
    }
    causePureError() {
        throw new Error('My pure Error');
    }
};
TopBarComponent = __decorate([
    Component({
        selector: 'crud-seed-top-bar',
        templateUrl: './top-bar.component.html',
        styleUrls: ['./top-bar.component.scss']
    })
], TopBarComponent);
export { TopBarComponent };
//# sourceMappingURL=top-bar.component.js.map