import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/shared/user.interface';
import * as RootStoreState from '../../shared/root-store/root-state';
import * as LoginActions from '../login/slice/actions';
import * as LoginSelectors from '../login/slice/selectors';
import { ENUM_LOGIN_FAKE } from './login.fake';

@Component({
  selector: 'toh-seed-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  isLoadingGlobal: Observable<boolean>;
  loginFake: typeof ENUM_LOGIN_FAKE = ENUM_LOGIN_FAKE;

  constructor(private store: Store<RootStoreState.State>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(
      LoginSelectors.selectLoginUser
    ).pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
        if (user) {
          this.router.navigate(['/product-list']);
        }
      });
  }

  requestLogin(ev: Event): void {
    this.store.dispatch(new LoginActions.LoginRequestAction());
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
