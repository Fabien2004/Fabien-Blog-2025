import { Component } from '@angular/core';
import { ThemeListComponent } from "../theme-list/theme-list.component";
import { PostsListComponent } from './posts-list/posts-list.component';


@Component({
  selector: 'app-main',
  imports: [PostsListComponent, ThemeListComponent], 
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
