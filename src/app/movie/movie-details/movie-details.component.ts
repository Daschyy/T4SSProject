import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService],
})
export class MovieDetailsComponent implements OnInit {
  trailerShown:boolean = false;
  toggleButton: string= "Show"
  movies: Movie[];
  movie: Movie;
  @Input() selectedMovie: Movie;

  showTrailer(){
    this.trailerShown= !this.trailerShown;
  }
  constructor(private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    var name ="error"
    this.route.params.subscribe(params => name = params.name);
   
    this.movie = this.movieService.getMovieByName(name)

    this.movies = this.movieService.getMovies();
  }

}
