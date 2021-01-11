import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class TopBarModule { }
