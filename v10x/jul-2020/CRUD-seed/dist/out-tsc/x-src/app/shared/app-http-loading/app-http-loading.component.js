import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import * as GlobalSelectors from '../../shared/root-store/selectors';
import * as AppHttpLoadingSelectors from '../app-http-loading/slice/selectors';
let AppHttpLoadingComponent = class AppHttpLoadingComponent {
    constructor(store) {
        this.store = store;
    }
    // VERY IMPORTANT!!!
    // below the ONLY needed slice/observable stack is the
    // AppHttpLoadingSelectors.selectIsLoading which is handled
    // in the server interceptor
    // The global loading GlobalSelectors.selectIsLoading
    // is not need since it is redundantly added to each and every
    // slice which is not DRY. It is being used to merely
    // simulate an http call via a delay timer. When real http
    // api calls are made that entire infractructure slice
    // can be removed.
    ngOnInit() {
        // this.isLoading$ =
        // this.store.select(
        //   GlobalSelectors.selectIsLoading
        // );
        this.isLoading$ =
            this.store.select(AppHttpLoadingSelectors.selectIsLoading);
        this.isLoadingJoined$ = combineLatest(this.store.select(AppHttpLoadingSelectors.selectIsLoading), this.store.select(GlobalSelectors.selectIsLoading)).pipe(map(([appLoading, globalRedundantLoading]) => {
            return appLoading || globalRedundantLoading;
        }));
    }
};
AppHttpLoadingComponent = __decorate([
    Component({
        selector: 'crud-seed-loading',
        templateUrl: './app-http-loading.component.html',
        styleUrls: ['./app-http-loading.component.scss']
    })
], AppHttpLoadingComponent);
export { AppHttpLoadingComponent };
//# sourceMappingURL=app-http-loading.component.js.map