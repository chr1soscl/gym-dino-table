import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DinoFormsModule } from 'dino-forms';
import { DinoTableModule } from 'dino-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    MoviesComponent
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
