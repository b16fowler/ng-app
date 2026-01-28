import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  template: ` <button (click)="apiTest()">Search</button> `,
  styles: `
    button {
      display: block;
      margin: 0 auto;
      margin-top: 5%;
    }
  `,
})
export class Search {
  apiTest = async () => {
    const url =
      'https://api.themoviedb.org/3/search/movie?query=Crazy%2C%20Stupid%2C%20Love&include_adult=true&language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2E2ZjY5M2Q5YmE1OTIyNWNiYzg1MGRlNjdmNWY4NyIsIm5iZiI6MTc2OTUzODA5NC43ODksInN1YiI6IjY5NzkwMjJlYzIwOGNmM2EyNzY4YTM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeQfmnBTBYbPxbp3g4BCmqT9ChrbfI0AuBXbgFGJgAg',
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  };
}
