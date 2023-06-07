import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./movies/movies.component";
import {MovieComponent} from "./movie/movie.component";
import {MovieResolver} from "./resolvers/movie.resolver";

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: "movies",
    component: MoviesComponent,
  },
  {
    path: "movie/:id",
    component: MovieComponent,
    resolve:{
      'movie': MovieResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
