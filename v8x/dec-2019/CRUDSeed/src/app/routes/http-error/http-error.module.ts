import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { HttpErrorComponent } from './http-error.component';

@NgModule({
  declarations: [HttpErrorComponent],
  exports: [HttpErrorComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule
  ]
})
export class HttpErrorModule { }
