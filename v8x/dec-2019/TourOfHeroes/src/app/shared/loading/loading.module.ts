import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material.module';

import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class LoadingModule { }
