import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as HttpErrorSelectors from './routes/http-error/slice/selectors';
import * as LoginSelectors from './routes/login/slice/selectors';
import * as RootStoreState from './shared/root-store/root-state';
import { User } from './shared/user.interface';

@Component({
  selector: 'crud-seed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<RootStoreState.State>, private router: Router) { }

  // tslint:disable-next-line: typedef
  title = 'CRUDSeed: Products CRUD';

  ngOnInit(): void {
    this.store.select(
      HttpErrorSelectors.selectHttpError
    ).pipe(takeUntil(this.destroy$))
      .subscribe((httpError: HttpErrorResponse) => {
        if (httpError) {
          this.router.navigate(['/http-error']);
        }
      });

    this.store.select(
      LoginSelectors.selectLoginUser
    ).pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
        if (!user) {
          this.router.navigate(['/']);
          console.log('no user');
        } else {
          this.router.navigate(['/product-list']);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
