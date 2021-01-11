import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FakeHttpErrorService } from '../fake-http-error.service';
import * as featureActions from './actions';

@Injectable()
export class FakeHttpErrorEffects {
  constructor(private fakeHttpService: FakeHttpErrorService, private actions$: Actions) { }

  @Effect()
  fakeHttpErrorRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.FakeHttpErrorRequestAction>(
      featureActions.ActionTypes.FAKE_HTTP_ERROR_REQUEST
    ),
    switchMap(() =>
      this.fakeHttpService
        .fake()
        .pipe(
          map((x) => null),
          catchError(err => of(new featureActions.FakeHttpErrorRequestFailureAction()))
        )
    )
  );
}
