import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as RootStoreState from '../../shared/root-store/root-state';
import * as GlobalSelectors from '../../shared/root-store/selectors';

@Component({
  selector: 'toh-seed-loading',
  templateUrl: './app-http-loading.component.html',
  styleUrls: ['./app-http-loading.component.scss']
})
export class AppHttpLoadingComponent implements OnInit {

  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    this.isLoading$ =
      this.store.select(
        GlobalSelectors.selectIsLoading
      );
  }

}
