import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
import { environment } from '../enviroments/enviroments';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovies() {
   const { apiUrl } = environment;
   return this.http.get<Movie[]>(`${apiUrl}/movies`);
  }
  getSingleMovie() {
    const { apiUrl } = environment;
   return this.http.get<Movie[]>(`${apiUrl}/movies`);
   
  }
  createMovie(movieName: string, MovieDescription: string, MovieImage: string){
    const { apiUrl } = environment;
    const payload = {movieName, MovieDescription, MovieImage};
   return this.http.get<Movie[]>(`${apiUrl}/movies`, payload);
  }

};