// import { Component, NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
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
export default class AngularCounter implements OnInit {
  readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<number>,
    private actions: CounterActionsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.count$ = ngRedux.select<number>((state) => {
      console.log('Observing value', this.count$, state);
      return state;
    });
  }

  ngOnInit() {
    this.count$.subscribe(() => {
      this.changeDetectorRef.detectChanges();
    });
  }

  increment() {
    this.actions.incrementAction();
  }

  decrement() {
    this.actions.decrementAction();
  }
}
