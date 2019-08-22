// import * as angular from 'angular';
// import ngRedux, { connect } from 'ng-redux';
// import store from './store';
import allActions from './actions';

export default function (elId, Component, actionNames) {
  const actions = actionNames.reduce((acc, curr) => {
    acc[curr] = allActions[curr];
    return acc;
  }, {});
  // angular.module('app', [ngRedux]).config([
  //   '$ngReduxProvider',
  //   ($ngReduxProvider) => {
  //     $ngReduxProvider.provideStore(store);
  //   },
  // ]);
  console.log(actions);
  const connected = new Component(elId); // , store.getState(), { ...actions });
  // const connected = connect(
  //   mapStateToTarget,
  //   [mapDispatchToTarget],
  // )(component);

  return connected;
}
