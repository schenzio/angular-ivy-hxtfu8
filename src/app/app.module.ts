import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Chapter1Component } from './chapter1/chapter1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Chapter1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
