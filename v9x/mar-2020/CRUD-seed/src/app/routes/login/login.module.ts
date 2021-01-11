import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { LoginFormModule } from './login-form/login-form.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    LoginFormModule,
    AppRoutingModule,
    AppMaterialModule
  ]
})
export class LoginModule { }
