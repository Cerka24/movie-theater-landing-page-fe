import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {MoviesModel} from "../models/moviesModel";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  //private apiUrl = 'https://imdb-api.com/en/API/Title/k_thla18ej/tt1375666';
  Movies: Array<MoviesModel> = [
    {
      id: 1,
      title: "Inception",
      year: "2010",
      plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      id: 2,
      title: "Spider-Man: No Way Home",
      year: "2021",
      plot: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
      poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 3,
      title: "Harry Potter and the Sorcerer's Stone",
      year: "2001",
      plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      poster: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 4,
      title: "Harry Potter and the Order of the Phoenix",
      year: "2007",
      plot: "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
      poster: "https://upload.wikimedia.org/wikipedia/hr/5/53/Harry_Potter_and_the_Order_of_the_Phoenix_%282007%29.jpg",
    },
    {
      id: 5,
      title: "Spider-Man: Far from Home",
      year: "2019",
      plot: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
      poster: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    },
    {
      id: 6,
      title: "Harry Potter and the Chambers of Secrets",
      year: "2002",
      plot: "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
      poster: "https://upload.wikimedia.org/wikipedia/hr/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg",
    },
    {
      id: 7,
      title: "Iron Man 2",
      year: "2010",
      plot: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
      poster: "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    },
    {
      id: 8,
      title: "The Avengers",
      year: "2012",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
    },
  ]
  // constructor(private http: HttpClient) { }

  getMovies(): Observable<MoviesModel[]> {
    //return this.http.get<MoviesModel[]>(`${this.apiUrl}/moviesLanding`);
    return of(this.Movies);
  }
  getMovieById(id: number): Observable<MoviesModel>{
    return of(this.Movies[id-1]);
  }
}
