import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as RootStoreState from '../../../shared/root-store/root-state';
import * as LoginFormSelectors from '../../login/login-form/slice/selectors';
import { LoginService } from '../login.service';
import * as featureActions from './actions';

@Injectable()
export class LoginEffects {
  constructor(private loginService: LoginService, private actions$: Actions, private store: Store<RootStoreState.State>) { }

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoginRequestAction>(
      featureActions.ActionTypes.LOGIN_REQUEST
    ),
    withLatestFrom(this.store.select(
      LoginFormSelectors.selectLogin
    )),
    switchMap(([, login]) =>
      this.loginService
        .login(login.uid, login.password)
        .pipe(
          map(
            user =>
              new featureActions.LoginSuccessAction({
                user
              })
          )
        )
    )
  );

  @Effect()
  logoutRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LogoutRequestAction>(
      featureActions.ActionTypes.LOGOUT_REQUEST
    ),
    switchMap(() =>
      this.loginService
        .logout()
        .pipe(
          map(
            () =>
              new featureActions.LogoutSuccessAction()
          )
        )
    )
  );
}
