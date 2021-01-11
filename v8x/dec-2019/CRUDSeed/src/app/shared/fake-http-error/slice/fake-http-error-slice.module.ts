import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FakeHttpErrorEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('fakeHttpErrorFeature', featureReducer),
    EffectsModule.forFeature([FakeHttpErrorEffects])
  ]
})
export class FakeHttpErrorSliceModule { }
