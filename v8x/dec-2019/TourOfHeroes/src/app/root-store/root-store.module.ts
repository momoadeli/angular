import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginFormSliceModule } from '../routes/login/login-form/slice/login-form-slice.module';
import { LoginSliceModule } from '../routes/login/slice/login-slice.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginSliceModule,
    LoginFormSliceModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
