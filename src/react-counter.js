import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactCounter extends Component {
  render() {
    return (
            <div style={{
              display: 'flex',
              margin: '0 auto',
              maxWidth: '50%',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
                <button onClick={this.props.increment}>+</button>
                <p>{this.props.value}</p>
                <button onClick={this.props.decrement}>-</button>
            </div>

    );
  }
}
ReactCounter.propTypes = {
  value: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};
