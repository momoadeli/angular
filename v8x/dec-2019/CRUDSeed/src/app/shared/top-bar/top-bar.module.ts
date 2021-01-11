import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { TopBarComponent } from './top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule
  ]
})
export class TopBarModule { }
