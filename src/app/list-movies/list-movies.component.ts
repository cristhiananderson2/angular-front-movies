import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../app.component';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  @Input() movies: MovieModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  remove(i: number){
    this.movies.splice(i, 1);
  }

}
