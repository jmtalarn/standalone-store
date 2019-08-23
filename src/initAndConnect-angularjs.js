import * as angular from 'angular';
import ngRedux from 'ng-redux';
import store from './store';
import allActions from './actions';

function mapStateToThis(state) {
  console.log('mapStateToThis', state);
  return {
    value: state,
  };
}
class CounterController {
  constructor($ngRedux, $scope, ngActions) {
    // eslint-disable-next-line no-console

    const unsubscribe = $ngRedux.connect(mapStateToThis, ngActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }
}
export default function (elId, Component, actionNames) {
  const actions = actionNames.reduce((acc, curr) => {
    acc[curr] = allActions[curr];
    return acc;
  }, {});

  // const component = new Component(elId, CounterController);
  const component = Component(elId, CounterController);
  angular
    .module('angularjsCounter', [ngRedux])
    .factory('ngActions', () => actions)
    .component('angularjsCounter', component)
    .controller('CounterController', CounterController)
    .config([
      '$ngReduxProvider',
      ($ngReduxProvider) => {
        $ngReduxProvider.provideStore(store);
      },
    ]);
  // .directive('angularjsCounter', Component);

  return {};
}
