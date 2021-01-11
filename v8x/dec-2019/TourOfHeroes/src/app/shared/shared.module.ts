import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularErrorHandlerService } from './angular-error-handler.service';
import { AppHttpLoadingModule } from './app-http-loading/app-http-loading.module';
import { AppMaterialModule } from './app-material.module';
import { AuthenticationErrorInterceptor } from './interceptors/authentication-error.interceptor';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { TopBarModule } from './top-bar/top-bar.module';

@NgModule({
  exports: [TopBarModule, AppHttpLoadingModule],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AngularErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationErrorInterceptor, multi: true }
  ]
})
export class SharedModule { }
