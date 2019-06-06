import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UPCOMING_MOVIES_API } from './upcoming-movies.api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getList(page: number) {
    return this.http.get(`${UPCOMING_MOVIES_API}/upcoming?page=${page}`);
  }

  getDetails(movieId: number) {
    return this.http.get(`${UPCOMING_MOVIES_API}/details/${movieId}`);
  }
  
}
