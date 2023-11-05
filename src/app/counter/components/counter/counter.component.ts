import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseby(+1)">+1</button>
    <button (click)="resetby()">reset</button>
    <button (click)="increaseby(-1)">-1</button>
  `
})

export class CounterComponent  {
  constructor() { }

  public title: string = 'Hola mundo';
  public counter: number = 10;

  increaseby(value: number):void {
    this.counter += value;
  }

  resetby():void{
    this.counter = 10;
  }

}
