import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComplexFormControlModule } from './complex-form-control/complex-form-control.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BridgePatternModule } from './bridge-pattern/bridge-pattern.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComplexFormControlModule,
    BridgePatternModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
