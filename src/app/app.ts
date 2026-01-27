import { Component } from '@angular/core';
import { Home } from '../components/home/home';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Home],
  template: `
    <app-header />
    <app-home />
  `,
  styles: [],
})
export class App {}
