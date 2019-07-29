import store from './store';

function incrementAction() {
  store.dispatch({ type: 'INCREMENT' });
}

function decrementAction() {
  store.dispatch({ type: 'DECREMENT' });
}

export default {
  incrementAction,
  decrementAction,
};
