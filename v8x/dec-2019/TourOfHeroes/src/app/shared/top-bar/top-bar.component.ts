import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as LoginActions from '../../routes/login/slice/actions';
import * as LoginSelectors from '../../routes/login/slice/selectors';
import * as RootStoreState from '../../shared/root-store/root-state';
import { User } from '../user.interface';

@Component({
  selector: 'toh-seed-top-bar',
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
    this.http.get('http://www.zhgdsfdsfsdf.com').subscribe();
  }

  causeErrorEvent(): void {
    throw new ErrorEvent('My ErrorEvent');
  }

  causePureError(): void {
    throw new Error('My pure Error');
  }

}
