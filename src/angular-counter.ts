// import { Component, NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-counter',
  template: `
    <div>
      <button (click)="decrementCount()">-</button>
      <p>{{ count | async }}</p>
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
  @select(state => state) count: Observable<number>;

  constructor(private ngRedux: NgRedux<number>) {
    console.log('THIS IS THE STATE', ngRedux);
  }

  incrementCount() {
    this.ngRedux.dispatch({ type: 'INCREMENT' });
  }

  decrementCount() {
    this.ngRedux.dispatch({ type: 'DECREMENT' });
  }
}
