import * as angular from 'angular';

export default class AngularJsCounter {
  constructor(elId) {
    this.element = document.getElementById(elId);
    this.element.setAttribute('ng-app', 'angularjsCounter');
    // Object.assign(this.element.style, {
    //   display: 'flex',
    //   margin: '0 auto',
    //   maxWidth: '50%',
    //   alignItems: 'center',
    //   justifyContent: 'space-around',
    // });
    this.element.innerHTML = `
        <angular-counter 
            style="display: flex; margin: 0 auto; max-width: 50%; align-items: center; justify-content: space-around"
        ></angular-counter>
    `;
    const app = angular.module('angularjsCounter', []);
    app.component('angularCounter', {
      template: `
            <button ng-click="$ctrl.decrement()">-</button>
                <p>{{$ctrl.counter}}</p>
            <button ng-click="$ctrl.increment()">+</button>
            `,

      controller: function CounterController() {
        this.counter = 0;
        this.increment = () => {
          this.counter = this.counter + 1;
        };
        this.decrement = () => {
          this.counter = this.counter - 1;
        };
      },
    });
  }
}
