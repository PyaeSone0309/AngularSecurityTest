import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  provideHttpClient,HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { AuthRedirectGuard } from './core/guards/auth-redirect.guard';
import { AuthService } from './core/service/auth.service';
import { AuthGuard } from './core/guards/auth.guard';
import { HttpConfigInterceptor } from './core/config/httpConfig.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthRedirectGuard,
    AuthGuard,
    AuthService,
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpConfigInterceptor,
      multi : true
    },
  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
