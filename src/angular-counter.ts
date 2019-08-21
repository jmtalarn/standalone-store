// import { Component, NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-counter',
  template: `
    <div>
      <button (click)="decrementCount()">-</button>
      <p>{{ count }}</p>
      <button (click)="incrementCount()">+</button>
    </div>
  `,
  styles: [
  `
      div {
        display: flex;
        margin: 0 auto;
        max-width: 50%;
        align-items: center;
        justify-content: space-around;
      }
    `,
  ],
  })
export default class AngularCounter {
  count: number = 0;

  incrementCount() {
    this.count += 1;
  }

  decrementCount() {
    this.count -= 1;
  }
}
