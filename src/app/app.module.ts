import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { loginReducer } from './app.reducer';
import { LoginEffect } from './auth/login/login.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({isLoggedIn: loginReducer}),
    EffectsModule.forRoot([LoginEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
