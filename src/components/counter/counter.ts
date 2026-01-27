import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <p>
      Counter value: {{counterValue()}}
    </p>
    <div>
      <button (click)="increaseCounter()">Increase counter</button>
      <button (click)="decreaseCounter()" >Decrease counter</button>
      <button (click)="resetCounter()" >Reset counter</button>
    </div>
  `,
  styles: ``,
})
export class Counter {
    counterValue = signal(0);

    increaseCounter() {
      console.log("Increase counter pressed");
      this.counterValue.update((val => val + 1));
    };
    
    decreaseCounter() {
      console.log("Decrease counter pressed");
      this.counterValue.update((val => val - 1));
    };
    
    resetCounter() {
      console.log("Reset counter pressed");
      this.counterValue.update((val => 0));
    }
}
