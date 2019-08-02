/* global window */
import './ng-polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import allActions from './actions';
import AngularCounterModule from './angular-counter-module.ts';
// import store from './store';


export default function (elId, Component, actionNames) {
  const actions = actionNames
    .reduce(
      (acc, curr) => {
        acc[curr] = allActions[curr];
        return acc;
      },
      {},
    );
  console.log(actions);

  platformBrowserDynamic().bootstrapModule(AngularCounterModule).then((ref) => {
  // Ensure Angular destroys itself on hot reloads.
    if (window.ngRef) {
      window.ngRef.destroy();
    }
    window.ngRef = ref;

  // Otherise, log the boot error
  }).catch(err => console.error(err));


  // return component;
}
