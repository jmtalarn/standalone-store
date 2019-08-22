import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AngularCounterConnected, AngularCounter } from './angular-counter.ts';
import { CounterActionsService } from './angular-injectable-actions.ts';

@NgModule({
  declarations: [AngularCounterConnected, AngularCounter],
  imports: [BrowserModule, NgReduxModule],
  providers: [CounterActionsService],
  bootstrap: [AngularCounterConnected],
  })
export default class AngularCounterModule {
  constructor(ngRedux: NgRedux<number>, @Inject('STORE') store) {
    ngRedux.provideStore(store);
  }
}
