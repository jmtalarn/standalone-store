// import { Component, NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-counter',
  template: `
    <div>
      <button>-</button>
      <p>0</p>
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
    `,
  ],
  })
export default class AngularCounter {}
