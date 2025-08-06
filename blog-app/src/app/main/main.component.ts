import { Component } from '@angular/core';
import { PostsListComponent } from './posts-list/posts-list.component';


@Component({
  selector: 'app-main',
  imports: [PostsListComponent], 
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
