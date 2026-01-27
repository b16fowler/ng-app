import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <nav>{{ title() }}</nav>
  `,
  styles: [
    `
      nav {
        color: red;
        padding: 3%;
        text-align: center;
        font-size: xx-large;
        background-color: black;
      }
    `,
  ],
})

export class Header {
  title = signal("This is the Header component");
}
