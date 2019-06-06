import { Genre } from './genre.model';

export class Movie {
    constructor(
        public id: number,
        public title: string,
        public poster_path: string,
        public genre_id: string,
        public release_date: string
    ){}
}