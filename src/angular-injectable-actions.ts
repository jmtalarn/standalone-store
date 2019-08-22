/* global */

import { Inject } from '@angular/core';

export class CounterActionsService {
  actions;

  constructor(@Inject('ACTIONS_OBJECT') actions) {
    this.actions = actions;
  }

  incrementAction() {
    this.actions.incrementAction();
  }

  decrementAction() {
    this.actions.decrementAction();
  }
}
