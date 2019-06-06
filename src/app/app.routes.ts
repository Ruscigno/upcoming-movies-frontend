import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const ROUTES: Routes = [
    { path : '', component: HomeComponent },
    { path : 'movie-list', component: MovieListComponent },
    { path : 'movie-details/:id', component: MovieDetailsComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);