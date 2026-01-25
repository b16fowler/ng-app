import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  template: ` <h3>This is the body component</h3> `,
  styles: [
    `
      h3 {
        color: blue;
        text-align: right;
      }
    `,
  ],
})
export class Body {}
