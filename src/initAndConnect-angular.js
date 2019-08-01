
import allActions from './actions';
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
  const component = new Component();
  document.getElementById(elId).innerHTML = `
      <angular-counter></angular-counter>
  `;

  console.log(elId, Component, actions);
  return component;
}
