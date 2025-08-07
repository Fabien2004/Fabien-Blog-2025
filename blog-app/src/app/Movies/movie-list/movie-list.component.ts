import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Post } from '../../types/post';



@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MoviesListComponent implements OnInit{
  posts: Post[] = [];
  isLoading = true;
  
  constructor(private apiService: ApiService){}
   
  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) =>{
      this.posts = posts;
       this.isLoading = false;     
    });
  }
}
