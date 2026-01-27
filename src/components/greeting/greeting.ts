import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  template: `
    <p>
      {{ message() }}
    </p>
  `,
  styles: ``,
})
export class Greeting {
  message = input("Default greeting message");
}
