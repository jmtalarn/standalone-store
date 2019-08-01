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


  const count = store.getState();

  const frag = document.createDocumentFragment();
  const connected = new Component({ target: frag, props: { count, ...actions } });
  const element = document.getElementById(elId);
  element.parentNode.replaceChild(frag, element);

  store.subscribe(() => {
    connected.$set({ count: store.getState() });
  });
  return connected;
}
