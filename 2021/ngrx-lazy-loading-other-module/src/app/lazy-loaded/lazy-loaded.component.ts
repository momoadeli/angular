import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromLazyStore } from './store/index';
import { Observable } from 'rxjs';
import { LazyState } from './store/reducers';
import { AppState } from './store/selectors';

@Component({
    selector: 'app-lazy-loaded',
    template:
        "<div style='display: flex; flex-direction: row;'><button (click)='inc()'>+</button><h1>{{(lazyStateCounter$ | async)}}</h1><button (click)='dec()'>-</button></div>",
})
export class LazyLoadedComponent {
    name = "We're in the LAZY-LOADED module";
    lazyStateCounter$: Observable<number>;
    constructor(private store: Store<AppState>) {
        this.lazyStateCounter$ = this.store.pipe(
            select(fromLazyStore.getMyCounter)
        );
    }
    inc() {
        this.store.dispatch(fromLazyStore.inc());
    }
    dec() {
        this.store.dispatch(fromLazyStore.dec());
    }
}
