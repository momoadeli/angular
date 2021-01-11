import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpErrorSliceModule } from 'src/app/routes/http-error/slice/http-error-slice.module';
import { LoginFormSliceModule } from '../../routes/login/login-form/slice/login-form-slice.module';
import { LoginSliceModule } from '../../routes/login/slice/login-slice.module';
import { ProductsSliceModule } from '../../routes/products/slice/products-slice.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpErrorSliceModule,
    LoginSliceModule,
    LoginFormSliceModule,
    ProductsSliceModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
