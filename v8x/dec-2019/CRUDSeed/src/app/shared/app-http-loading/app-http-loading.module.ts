import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material.module';

import { AppHttpLoadingComponent } from './app-http-loading.component';

@NgModule({
  declarations: [AppHttpLoadingComponent],
  exports: [AppHttpLoadingComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class AppHttpLoadingModule { }
