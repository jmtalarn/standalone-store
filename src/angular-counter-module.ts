import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AngularCounter from './angular-counter.ts';

@NgModule({
  imports: [BrowserModule],
  declarations: [AngularCounter],
  entryComponents: [AngularCounter],
  })
export default class AngularCounterModule {
  ngDoBootstrap(app) {
    app.bootstrap(AngularCounter);
  }
}
