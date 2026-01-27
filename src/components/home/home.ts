import { Component, signal } from '@angular/core';
import { Greeting } from "../../components/greeting/greeting";
import { Counter } from "../../components/counter/counter";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting, Counter],
  template: `
  <h3>This is the body component</h3> 
  <app-greeting [message]="homeMessage()"/>
  <app-counter />
  <input placeholder="Type something" type="text" (keyup)="keyUpHandler($event)" />
  `,
  styles: [
    `
      h3 {
        color: blue;
        text-align: center;
      }
    `,
  ],
})
export class Home {
  homeMessage = signal("This is the homeMessage variable");

  keyUpHandler(event: KeyboardEvent) {
    console.log(`User pressed the ${event.key} key`);
  }
}
