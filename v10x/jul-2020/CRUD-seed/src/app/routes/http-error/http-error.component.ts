import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as LoginActions from '../../routes/login/slice/actions';
import * as RootStoreState from '../../shared/root-store/root-state';
import * as HttpErrorSelectors from './slice/selectors';

@Component({
  selector: 'crud-seed-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.scss']
})
export class HttpErrorComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  httpError: HttpErrorResponse;
  // tslint:disable-next-line: no-inferrable-types
  httpErrorMessage: string = 'please logout first';

  constructor(private store: Store<RootStoreState.State>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(
      HttpErrorSelectors.selectHttpError
    ).pipe(takeUntil(this.destroy$))
      .subscribe((httpError: HttpErrorResponse) => {
        if (httpError) {
          console.log(httpError);
          this.httpError = httpError;
          this.httpErrorMessage = httpError.message;
        }
      });
  }

  logout(): void {
    this.store.dispatch(new LoginActions.LogoutRequestAction());
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
