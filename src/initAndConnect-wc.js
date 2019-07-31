import store from './store';
import allActions from './actions';

import './wc-counter';

export default function (elId, Component, actionNames) {
  const element = document.getElementById(elId);
  element.innerHTML = Component;

  const counterComponent = element.querySelector('wc-counter');
  counterComponent.count = store.getState();
  actionNames.forEach((method) => {
    counterComponent[method] = allActions[method];
  });
  store.subscribe(() => {
    counterComponent.count = store.getState();
  });
  return counterComponent;
}
