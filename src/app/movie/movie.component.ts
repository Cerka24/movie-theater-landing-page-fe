import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {MoviesModel} from "../models/moviesModel";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy{
  public title: string = '';
  public year: string = '';
  public poster: string = '';
  public plot: string = '';

  private movie: MoviesModel | undefined;
  private unsubscribe: Subscription | undefined;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.unsubscribe = this.activatedRoute.data.subscribe((data) => {
      console.log("DATA :: ", data)
      this.movie = data['movie'];
      this.title = data['movie']?.title
      this.year = data['movie']?.year
      this.poster = data['movie']?.poster
      this.plot = data['movie']?.plot
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }
}
