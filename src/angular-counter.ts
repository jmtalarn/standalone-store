// import { Component, NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { CounterActionsService } from './angular-injectable-actions.ts';

@Component({
  selector: 'angular-counter',
  template: `
    <div>
      <button (click)="decrement()">-</button>
      <p>{{ count$ | async }}</p>
      <button (click)="increment()">+</button>
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
  readonly count$: Observable<number>;

  constructor(private ngRedux: NgRedux<number>, private actions: CounterActionsService) {
    console.log(ngRedux);

    this.count$ = ngRedux.select<number>((state) => {
      console.log('Observing value', this.count$, state);
      return state;
    });
  }

  increment() {
    this.actions.incrementAction();
  }

  decrement() {
    this.actions.decrementAction();
  }

  // @select(state => state) count: Observable<number>;

  // public count2: Observable<number>;

  // constructor(private ngRedux: NgRedux<number>) {
  //   this.count2 = this.ngRedux.select(state => state);
  // }

  // incrementCount() {
  //   this.ngRedux.dispatch({ type: 'INCREMENT' });
  // }

  // decrementCount() {
  //   this.ngRedux.dispatch({ type: 'DECREMENT' });
  // }
}
