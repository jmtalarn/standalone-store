import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import actions from './actions';
import ReactCounter from './react-counter';
import store from './store';

export default function (elId) {
  const mapStateToProps = state => ({
    value: state,
  });

  // const mapDispatchToProps = dispatch => ({
  const mapDispatchToProps = () => ({
    increment: () => { actions.incrementAction(); },
    decrement: () => { actions.decrementAction(); },
  });


  const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(ReactCounter);


  ReactDOM.render(<Provider store={store}><ConnectedCounter /></Provider>,
    document.getElementById(elId));
}
