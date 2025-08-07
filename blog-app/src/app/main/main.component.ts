import { Component } from '@angular/core';
import { MoviesListComponent } from '../Movies/movie-list/movie-list.component';



@Component({
  selector: 'app-main',
  imports: [MoviesListComponent], 
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
