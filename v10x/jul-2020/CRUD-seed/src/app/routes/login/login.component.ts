import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RootStoreState from '../../shared/root-store/root-state';
import * as LoginActions from '../login/slice/actions';

@Component({
  selector: 'crud-seed-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
  }

  requestLogin(): void {
    this.store.dispatch(new LoginActions.LoginRequestAction());
  }

  ngOnDestroy(): void {
  }

}
