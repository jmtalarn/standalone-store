import store from './store';
import allActions from './actions';

export default function (elId, Component, actionNames, onUpdate) {
  const actions = actionNames
    .reduce(
      (acc, curr) => {
        acc[curr] = allActions[curr];
        return acc;
      },
      {},
    );
  const connected = new Component(elId, store.getState(), { ...actions });
  const methodsToRunOnUpdate = onUpdate.map(method => connected[method].bind(connected));

  store.subscribe(() => {
    methodsToRunOnUpdate.forEach(method => method(store.getState()));
  });
  return connected;
}
