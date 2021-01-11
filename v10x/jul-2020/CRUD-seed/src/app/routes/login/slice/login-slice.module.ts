import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('loginFeature', featureReducer),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers: [LoginEffects]
})
export class LoginSliceModule { }
