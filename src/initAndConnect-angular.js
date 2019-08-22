/* global */
import './ng-polyfills.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import allActions from './actions';
import AngularCounterModule from './angular-counter-module.ts';

enableProdMode();

export default function (elId, Component, actionNames) {
  document.getElementById(elId).innerHTML = '<angular-counter></angular-counter>';
  const actions = actionNames.reduce((acc, curr) => {
    acc[curr] = allActions[curr];
    return acc;
  }, {});
  console.log(actions);

  platformBrowserDynamic()
    .bootstrapModule(AngularCounterModule)
    .catch(err => console.error(err));

  return {};
}
