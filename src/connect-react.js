import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import actions from './actions';
import ReactCounter from './react-counter';

export default function (elId) {
  const mapStateToProps = state => ({
    value: state,
  });

  // const mapDispatchToProps = dispatch => ({
  const mapDispatchToProps = () => ({
    increment: () => { actions.incrementAction(); },
    decrement: () => { actions.incrementAction(); },
  });


  const connectedCounter = connect(mapStateToProps, mapDispatchToProps)(ReactCounter);

  ReactDOM.render(connectedCounter, document.getElementById(elId));
}
