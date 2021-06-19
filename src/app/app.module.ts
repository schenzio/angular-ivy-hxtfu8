import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { ScrollStoryComponent } from './scroll-story/scroll-story.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule ],
  declarations: [ AppComponent, Chapter1Component, ScrollStoryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
