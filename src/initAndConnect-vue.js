import Vue from 'vue';
// import { reduxStorePlugin, connect } from 'redux-vue';
import { connect } from 'vue-redux-connect';

import store from './store';
import allActions from './actions';

export default function (elId, Component, actionNames) {
  const mapStateToProps = state => ({ count: state });
  const actions = actionNames
    .reduce(
      (acc, curr) => {
        acc[curr] = allActions[curr];
        return acc;
      },
      {},
    );
  const mapDispatchToProps = () => actions;

  const ConnectedVueComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

  return new Vue({
    el: `#${elId}`,
    data() { return { store }; },
    components: { ConnectedVueComponent },
    template: '<ConnectedVueComponent :store="store"/>',
  });
}
