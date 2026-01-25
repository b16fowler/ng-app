import { Component } from '@angular/core';
import { Body } from '../components/body/body';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Body],
  template: `
    <app-header />
    <app-body />
  `,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class App {}
