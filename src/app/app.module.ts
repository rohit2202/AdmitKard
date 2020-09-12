import { BrowserModule } from '@angular/platform-browser';

import {Ng2TelInputModule} from 'ng2-tel-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';

@NgModule({
  declarations: [
    AppComponent,   
    SigninComponent, Screen2Component, Screen3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOtpInputModule,
    
    Ng2TelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
