import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZiggeoModule } from 'angular-ziggeo';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, ZiggeoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
