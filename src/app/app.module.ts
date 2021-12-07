import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DinoFormsModule } from 'dino-forms';
import { DinoTableModule } from 'dino-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DinoTableModule,
    DinoFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
