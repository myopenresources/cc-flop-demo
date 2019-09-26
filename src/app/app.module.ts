import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CcFlopModule } from 'cc-flop';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CcFlopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
