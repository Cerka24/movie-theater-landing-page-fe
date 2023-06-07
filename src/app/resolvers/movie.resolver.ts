import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {MoviesService} from "../services/movies.service";
import {MoviesModel} from "../models/moviesModel";

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<MoviesModel> {
  private moviesService:MoviesService;

  constructor(moviesService: MoviesService) {
    this.moviesService = moviesService;
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MoviesModel> {
    const movieId = route.paramMap.get('id');
    return this.moviesService.getMovieById(+movieId!);
  }
}
