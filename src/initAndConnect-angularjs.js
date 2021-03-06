import * as angular from 'angular';
import ngRedux from 'ng-redux';
import store from './store';
import allActions from './actions';

function mapStateToThis(state) {
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
CounterController.$inject = ['$ngRedux', '$scope', 'ngActions'];

export default function (elId, Component, actionNames) {
  const actions = actionNames.reduce((acc, curr) => {
    acc[curr] = allActions[curr];
    return acc;
  }, {});

  // const component = new Component(elId, CounterController);

  angular
    .module('angularjsCounter', [ngRedux])
    .factory('ngActions', () => () => actions)
    .component('angularjsCounter', Component(elId, CounterController))
    .controller('CounterController', ['$ngRedux', '$scope', 'ngActions', CounterController])
    .config([
      '$ngReduxProvider',
      ($ngReduxProvider) => {
        $ngReduxProvider.provideStore(store);
      },
    ]);
  // .directive('angularjsCounter', Component);

  return {};
}
