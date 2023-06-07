import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesModel} from "../models/moviesModel";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy{
  // public movies!: MoviesModel;
  // private unsubscribe: Subscription[] = [];
  //
  // constructor(private activatedRoute: ActivatedRoute) {
  // }
  //
  // ngOnInit(): void {
  //   this.unsubscribe.push(this.activatedRoute.data.subscribe(data =>{
  //     this.movies = data['movies'];
  //     console.log(data);
  //   }))
  // }
  public movies: Array<MoviesModel> = []
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.unsubscribe = this.moviesService.getMovies().subscribe((data) => this.movies = data)
  }

  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }

  navigateToMovie(id: number): void {
    this.router.navigate([
      'movie/' + id
    ])
  }
}
