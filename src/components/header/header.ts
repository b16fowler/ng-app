import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: ` <h1>This is the header component</h1> `,
  styles: [
    `
      h1 {
        color: red;
        text-align: center;
      }
    `,
  ],
})
export class Header {}
