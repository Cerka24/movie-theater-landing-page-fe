import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {MoviesService} from "./movies.service";
import {MoviesModel} from "./moviesModel";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<MoviesModel[]> {
  private moviesService:MoviesService;

  constructor(moviesService: MoviesService) {
    this.moviesService = moviesService;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MoviesModel[]> {
    const movieId = route.paramMap.get('id');

    return this.moviesService.getMovies();
  }
}
