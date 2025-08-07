import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HeaderComponent } from './core/header/header.component';

import { MainComponent } from './main/main.component';

import { HomeComponent } from './home/home.component';
import { NewMovieComponent } from './Movies/new-movie/new-movie.component';


export const routes: Routes = [
    {path: '', redirectTo: "/home", pathMatch: "full"},
    {path: 'home', component: HomeComponent},

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent}, 

    {path: 'movie-list', component: MainComponent},
    {path: 'new-movie', component: NewMovieComponent},
     
    
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404'},
    
];
