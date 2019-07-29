import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import allActions from './actions';
import store from './store';

export default function (elId, Component, actionNames) {
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


    ReactDOM.render(<Provider store={store}><ConnectedCounter /></Provider>,
      document.getElementById(elId));
  }
}
