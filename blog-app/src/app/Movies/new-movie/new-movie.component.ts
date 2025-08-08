import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-new-movie',
  imports: [],
  templateUrl: './new-movie.component.html',
  styleUrl: './new-movie.component.css'
})
export class NewMovieComponent {
  constructor(private apiService: ApiService){}

  addMovie(){}
}
