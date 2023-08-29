import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: '**', component: LoginComponent },
  // {path:'empw',component:EmployeedataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
