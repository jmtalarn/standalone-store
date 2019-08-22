import 'angular';

export default class AngularJsCounter {
  constructor(elId, state, actions) {
    this.element = document.getElementById(elId);
    this.element.setAttribute('ng-app', '');
    Object.assign(this.element.style, {
      display: 'flex',
      margin: '0 auto',
      maxWidth: '50%',
      alignItems: 'center',
      justifyContent: 'space-around',
    });
    this.element.innerHTML = `
        <button ng-click="counter = counter - 1">-</button>
        <p ng-init="counter = 0">{{counter}}</p>
        <button ng-click="counter = counter + 1">+</button>
    `;
    console.log(state, actions);
  }
}
