/* global */

import { Injectable } from '@angular/core';
import store from './store.js';

import allActions from './actions';

export class CounterActionsService {
  incrementAction() {
    store.dispatch({ type: 'INCREMENT' });
  }

  decrementAction() {
    store.dispatch({ type: 'DECREMENT' });
  }
  // constructor(actionNames) {
  //   actionNames.forEach((actionName) => {
  //     this[actionName] = allActions[actionName];
  //   });
}
