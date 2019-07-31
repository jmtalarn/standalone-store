import Counter from './elm-counter.elm';
import store from './store';
import allActions from './actions';

export default function (elId, ElmCounter, actionNames) {
  const elmCounter = Counter.Elm.Main.init(
    {
      node: document.getElementById(elId),
      flags: store.getState(),
    },
  );

  store.subscribe(() => {
    elmCounter.ports.countFromState.send(store.getState());
  });

  actionNames.forEach((action) => {
    elmCounter.ports[action].subscribe(
      () => {
        allActions[action]();
      },
    );
  });

  return elmCounter;
}
