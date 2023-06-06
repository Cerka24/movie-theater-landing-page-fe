import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {MoviesModel} from "./moviesModel";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  //private apiUrl = 'https://imdb-api.com/en/API/Title/k_thla18ej/tt1375666';
  Movies: Array<MoviesModel> = [
    {
      id: 1,
      title: "App Developer",
      year: "01/05/2023",
      plot: "Design and develop the student volunteering app to make it user-friendly and easy to navigate.",
      poster: "https://buildfire.com/wp-content/uploads/2017/10/become-mobile-app-developer.jpg",
    },
    {
      id: 2,
      title: "Content Creator",
      year: "01/05/2023",
      plot: "Create engaging and informative content for the app, including blog posts, news articles, and social media updates.",
      poster: "https://www.weidert.com/hubfs/content-creator-tips-feature-image.webp",
    },
    {
      id: 3,
      title: "Marketing Specialist",
      year: "01/05/2023",
      plot: "Develop marketing campaigns to promote the app to the student community, such as through social media, email marketing, and event sponsorships.",
      poster: "https://img.freepik.com/premium-vector/marketing-specialist-typographic-header-advertising-marketing-concept-business-strategy-communucation-with-customer-isolated-flat-vector-illustration_613284-2135.jpg?w=2000",
    },
    {
      id: 4,
      title: "Outreach Coordinator",
      year: "01/05/2023",
      plot: "Build relationships with student organizations, schools, and community groups to promote the app and encourage volunteer sign-ups.",
      poster: "https://jobsoidstorage.blob.core.windows.net/job-images/JobDescription/Image/645-outreach-coordinator-20201124125119742.png",
    },
    {
      id: 5,
      title: "Volunteer Coordinator",
      year: "01/05/2023",
      plot: "Manage and oversee the volunteer program, including recruiting, training, and assigning volunteers to various projects and events.",
      poster: "http://cdn.www.volunteerhub.com/uploads/2014/11/volunteer-coordinator-2.jpg",
    },
    {
      id: 6,
      title: "Graphic Designer",
      year: "01/05/2023",
      plot: "Create eye-catching graphics and designs for the app, such as logos, icons, and infographics.",
      poster: "https://www.zilliondesigns.com/blog/wp-content/uploads/creative-graphic-designer-1280x720.png",
    },
    {
      id: 7,
      title: "Project Manager",
      year: "01/05/2023",
      plot: "Oversee the development and implementation of various projects and initiatives related to the student volunteering app.",
      poster: "https://www.feedough.com/wp-content/uploads/2021/09/project-manager.png",
    },
    {
      id: 8,
      title: "User Experience (UX) Designer",
      year: "01/05/2023",
      plot: "Conduct user research and design the app's user interface to ensure a seamless and enjoyable user experience.",
      poster: "https://www.keenesystems.com/hs-fs/hubfs/blog-images/ux-design.jpg?width=900&name=ux-design.jpg",
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
