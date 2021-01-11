import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TopBarComponent } from './top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class TopBarModule { }
