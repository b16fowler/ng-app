import { Component, signal } from '@angular/core';
import { Greeting } from '../../components/greeting/greeting';
import { Counter } from '../../components/counter/counter';
import { Search } from '../search/search';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting, Counter, Search],
  template: `
    <h3>{{ title() }}</h3>
    <app-greeting [message]="greetingMessage()" />
    <app-counter />
    <input
      id="input-counter"
      placeholder="Type something"
      type="text"
      (keyup)="keyUpHandler($event)"
    />
    <app-search />
  `,
  styles: [
    `
      h3 {
        color: black;
        text-align: center;
        margin-bottom: 5%;
      }
      #input-counter {
        display: block;
        margin: 0 auto;
        margin-top: 1%;
      }
    `,
  ],
})
export class Home {
  title = signal('This is the Home component title');

  greetingMessage = signal('This is the greetingMessage variable, passed from the Home component');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`User pressed the ${event.key} key`);
  }
}
