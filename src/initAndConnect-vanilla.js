import store from './store';
import allActions from './actions';

export default function (elId, Component, actionNames) {
  const actions = actionNames
    .reduce(
      (acc, curr) => {
        acc[curr] = allActions[curr];
        return acc;
      },
      {},
    );
  const connected = new Component(elId, store.getState(), { ...actions });


  store.subscribe(() => {
    connected.render(store.getState());
  });
  return connected;
}
