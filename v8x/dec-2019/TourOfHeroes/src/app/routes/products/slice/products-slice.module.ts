import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('productsFeature', featureReducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [ProductsEffects]
})
export class ProductsSliceModule { }

