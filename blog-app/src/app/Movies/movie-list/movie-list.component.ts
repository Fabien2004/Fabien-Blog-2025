
import { ApiService } from '../../api.service';
import { Movie } from '../../models/movie.model';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
      this.isLoading = false;
    });
  }
}