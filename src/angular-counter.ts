// import { Component, NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import {
  Component, ChangeDetectorRef, OnInit, Input,
} from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { CounterActionsService } from './angular-injectable-actions.ts';
@Component({
  selector: 'angular-counter-wrapped',
  template: `
    <div>
      <button (click)="decrement()">-</button>
      <p>{{ count }}</p>
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
export class AngularCounter {
  @Input() count;

  @Input() increment;

  @Input() decrement;
}

@Component({
  selector: 'angular-counter',
  template: `
    <angular-counter-wrapped
      [count]="count$ | async"
      [increment]="incrementAction.bind(this)"
      [decrement]="decrementAction.bind(this)"
    ></angular-counter-wrapped>
  `,
  })
export class AngularCounterConnected implements OnInit {
  readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<number>,
    private actions: CounterActionsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.count$ = ngRedux.select<number>(state => state);
  }

  ngOnInit() {
    this.count$.subscribe(() => {
      this.changeDetectorRef.detectChanges();
    });
  }

  incrementAction() {
    if (this.actions.incrementAction) {
      this.actions.incrementAction();
    }
  }

  decrementAction() {
    if (this.actions.decrementAction) {
      this.actions.decrementAction();
    }
  }
}
