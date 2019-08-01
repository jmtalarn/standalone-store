import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './ng-polyfills.ts';


@Component({
    selector: 'angular-counter',
    template: `
    <div>
        <button>-</button>
        <p>{{count}}</p>
        <button>+</button>
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
        `
    ]

})
class AngularCounter {}

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [AngularCounter],
  bootstrap: [AngularCounter],
})
export default class AngularCounterModule {}

// platformBrowserDynamic()
//   .bootstrapModule(AngularCounterModule)
//   .catch(err => console.error(err));

