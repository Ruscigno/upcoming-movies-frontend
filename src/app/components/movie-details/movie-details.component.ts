import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/model/genre.model';
import { MovieDetails } from 'src/app/model/movieDetails.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie = new MovieDetails(0, '', '', [new Genre(0, '')], '', '');
  message: {};
  classCss: {};

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let id: any = this.route.snapshot.params['id'];
    if (id != undefined) {
      this.findById(id);
    }
  }

  findById(movieId: number) {
    this.movieService.getDetails(movieId).subscribe((movieReturn: MovieDetails) => {
      this.movie = movieReturn;
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-' + type] = true;
  }

}
