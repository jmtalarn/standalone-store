import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactCounter extends Component {
  increment() {
    this.props.increment();
  }

  decrement() {
    this.props.decrement();
  }

  render() {
    return (
            <div>
                <button onClick={this.increment}>+</button>
                <p>{this.props.value}</p>
                <button onClick={this.decrement}>-</button>
            </div>

    );
  }
}
ReactCounter.propTypes = {
  value: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};
