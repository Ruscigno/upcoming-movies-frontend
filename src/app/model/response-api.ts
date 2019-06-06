import { Movie } from './movie.model';

export class ResponseApi {
    public results: Array<Movie>;
    public page: number;
    public total_results: number;
    public dates: Array<string>;
    public total_pages: number;
}