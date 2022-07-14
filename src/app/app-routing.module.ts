import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  {
    path:"",
    component:AppComponent
  },
  { path:"home", component:AppComponent },
  { path:"pokemon", component:PokemonComponent},
  { path:"movies", component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
