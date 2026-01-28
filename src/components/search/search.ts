import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  template: ` <button>Search</button> `,
  styles: `
    button {
      display: block;
      margin: 0 auto;
      margin-top: 5%;
    }
  `,
})
export class Search {
  // apiTest = async () => {
  //   const url =
  //     'https://api.themoviedb.org/3/search/movie?query=Crazy%2C%20Stupid%2C%20Love&include_adult=true&language=en-US&page=1';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: API_KEY,
  //     },
  //   };
  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((err) => console.error(err));
  // };
}
