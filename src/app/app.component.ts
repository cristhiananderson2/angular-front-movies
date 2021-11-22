import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-movies';

  movies: MovieModel[] = [];
  moviesNext: MovieModel[] = [];

  ngOnInit(): void {
    this.movies = [
      new MovieModel({ title: 'Test 1', date:  new Date(), price: 1500 }),
      new MovieModel({ title: 'Test 2', date:  new Date(), price: 1400 }),
      new MovieModel({ title: 'Test 3', date:  new Date(), price: 2000 })
    ]  

    this.moviesNext = [
      new MovieModel({ title: 'Next 1', date:  new Date(), price: 2333 }),
      new MovieModel({ title: 'Next 2', date:  new Date(), price: 3112 }),
      new MovieModel({ title: 'Next 3', date:  new Date(), price: 3332 })
    ]  
  }
}

export class MovieModel {
  title: string;
  date: Date;
  price: number

  constructor(params?: Partial<MovieModel>){
    this.title = params?.title ?? null;
  }
}