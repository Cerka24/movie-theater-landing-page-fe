import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./movies/movies.component";
import {MoviesResolver} from "./movies.resolver";

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'moviesLanding',
    component: MoviesComponent,
    resolve: {
      'movies': MoviesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
