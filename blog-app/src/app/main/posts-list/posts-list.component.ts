import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { Post } from '../../types/post';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit{
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
