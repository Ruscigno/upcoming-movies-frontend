import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  page: number = 0;
  pages: Array<number>;
  message: {};
  classCss: {};
  listMovie = [];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.findAll(this.page);
  }

  findAll(page: number) {
    this.movieService.getList(page).subscribe((responseApi: ResponseApi) => {
      this.listMovie = responseApi['results'];
      this.pages = new Array(responseApi['total_pages']);
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  openDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }

  setNextPage(event: any) {
    event.preventDefault();
    if ((this.page+1) < this.pages.length) {
      this.page += 1;
      this.findAll(this.page);
    }
  }

  setPreviousPage(event: any) {
    event.preventDefault();
    if (this.page > 0) {
      this.page -= 1;
      this.findAll(this.page);
    }
  }
  
  setPage(i: any, event: any) {
    event.preventDefault();
    this.page = i;
    this.findAll(this.page);
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
