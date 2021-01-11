import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarModule } from './top-bar/top-bar.module';

@NgModule({
  declarations: [],
  exports: [TopBarModule],
  imports: [
    CommonModule,
    TopBarModule
  ]
})
export class SharedModule { }
