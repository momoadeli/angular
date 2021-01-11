import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';
let FakeHttpErrorEffects = class FakeHttpErrorEffects {
    constructor(fakeHttpService, actions$) {
        this.fakeHttpService = fakeHttpService;
        this.actions$ = actions$;
        this.fakeHttpErrorRequestEffect$ = this.actions$.pipe(ofType(featureActions.ActionTypes.FAKE_HTTP_ERROR_REQUEST), switchMap(() => this.fakeHttpService
            .fake()
            .pipe(map((x) => null), catchError(err => of(new featureActions.FakeHttpErrorRequestFailureAction())))));
    }
};
__decorate([
    Effect()
], FakeHttpErrorEffects.prototype, "fakeHttpErrorRequestEffect$", void 0);
FakeHttpErrorEffects = __decorate([
    Injectable()
], FakeHttpErrorEffects);
export { FakeHttpErrorEffects };
//# sourceMappingURL=effects.js.map