import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import * as RootStoreState from '../../shared/root-store/root-state';
import * as GlobalSelectors from '../../shared/root-store/selectors';
import * as AppHttpLoadingSelectors from '../app-http-loading/slice/selectors';

@Component({
  selector: 'crud-seed-loading',
  templateUrl: './app-http-loading.component.html',
  styleUrls: ['./app-http-loading.component.scss']
})
export class AppHttpLoadingComponent implements OnInit {

  isLoading$: Observable<boolean>;
  isLoadingJoined$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) { }

  // VERY IMPORTANT!!!
  // below the ONLY needed slice/observable stack is the
  // AppHttpLoadingSelectors.selectIsLoading which is handled
  // in the server interceptor
  // The global loading GlobalSelectors.selectIsLoading
  // is not need since it is redundantly added to each and every
  // slice which is not DRY. It is tmp'rarily used to merely
  // simulate an http call via a delay timer. When real http
  // api calls are made that entire infractructure slice
  // can be removed.

  ngOnInit(): void {
    // this.isLoading$ =
    // this.store.select(
    //   GlobalSelectors.selectIsLoading
    // );
    this.isLoading$ =
      this.store.select(
        AppHttpLoadingSelectors.selectIsLoading
      );

    this.isLoadingJoined$ = combineLatest([
      this.store.select(
        AppHttpLoadingSelectors.selectIsLoading
      ),
      this.store.select(
        GlobalSelectors.selectIsLoading
      )]
    ).pipe(map(([appLoading, globalRedundantLoading]: [boolean, boolean]) => {
      return appLoading;
    }));
  }

}
