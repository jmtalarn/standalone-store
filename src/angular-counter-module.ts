import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import AngularCounter from './angular-counter.ts';
import { CounterActionsService } from './angular-injectable-actions.ts';
import store from './store';

@NgModule({
  declarations: [AngularCounter],
  imports: [BrowserModule, NgReduxModule],
  providers: [CounterActionsService],
  entryComponents: [AngularCounter],
  })
export default class AngularCounterModule {
  constructor(ngRedux: NgRedux<number>) {
    ngRedux.provideStore(store);
  }

  ngDoBootstrap(app) {
    app.bootstrap(AngularCounter);
  }
}
