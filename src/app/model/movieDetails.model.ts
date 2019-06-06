import { Genre } from './genre.model';

export class MovieDetails {
    constructor(
        public id: number,
        public title: string,
        public poster_path: string,
        public genres: Genre[],
        public overview: string,
        public release_date: string
    ){}
}