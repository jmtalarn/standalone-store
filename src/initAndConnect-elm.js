import Counter from './elm-counter.elm';
import store from './store';
import allActions from './actions';

export default function (elId) {
  const elmCounter = Counter.Elm.Main.init(
    {
      node: document.getElementById(elId),
      flags: store.getState(),
    },
  );

  store.subscribe(() => {
    elmCounter.ports.countFromState.send(store.getState());
  });


  elmCounter.ports.increment.subscribe(
    () => {
      allActions.incrementAction();
    },
  );
  elmCounter.ports.decrement.subscribe(
    () => {
      allActions.decrementAction();
    },
  );
}
