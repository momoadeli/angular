import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginFormModule { }
