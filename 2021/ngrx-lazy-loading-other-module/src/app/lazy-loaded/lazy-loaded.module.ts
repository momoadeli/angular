import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyLoadedComponent } from './lazy-loaded.component';
import { LazyLoadedRouting } from './lazy-loaded-routing.module';
import { StoreModule } from '@ngrx/store';
import { fromLazyStore } from './store';

@NgModule({
    imports: [
        CommonModule,
        LazyLoadedRouting,
        StoreModule.forRoot({}),
        StoreModule.forFeature('lazyState', fromLazyStore.lazyReducer)
    ],
    declarations: [LazyLoadedComponent],
})
export class LazyLoadedModule { }
