import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import * as LoginActions from '../../routes/login/slice/actions';
import * as LoginSelectors from '../../routes/login/slice/selectors';
import * as FakeHttpErrorActions from '../../shared/fake-http-error/slice/actions';
import * as RootStoreState from '../../shared/root-store/root-state';
import { User } from '../user.interface';

@Component({
  selector: 'crud-seed-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  user$: Observable<User>;

  constructor(private store: Store<RootStoreState.State>, private http: HttpClient) { }

  ngOnInit(): void {
    this.user$ = this.store.select(
      LoginSelectors.selectLoginUser
    );
  }

  logout(): void {
    this.store.dispatch(new LoginActions.LogoutRequestAction());
  }

  causeHttpError(): void {
    this.store.dispatch(new FakeHttpErrorActions.FakeHttpErrorRequestAction());
  }

  causePureError(): void {
    throw new Error('My pure Error');
  }

}
