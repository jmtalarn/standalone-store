import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import allActions from './actions';
import store from './store';

export default function (elId, Component, actionNames) {
  let ConnectedAndWrappedCounter = null;
  if (actionNames) {
    const actions = actionNames
      .reduce(
        (acc, curr) => {
          acc[curr] = allActions[curr];
          return acc;
        },
        {},
      );
    const mapStateToProps = state => ({
      value: state,
    });

    // const mapDispatchToProps = dispatch => ({
    const mapDispatchToProps = () => (actions);


    const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Component);

    ConnectedAndWrappedCounter = <Provider store={store}><ConnectedCounter /></Provider>;

    ReactDOM.render(ConnectedAndWrappedCounter,
      document.getElementById(elId));
  }
  return ConnectedAndWrappedCounter;
}
