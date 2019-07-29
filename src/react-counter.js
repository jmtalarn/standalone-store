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
                <button onClick={this.props.decrementAction}>-</button>
                <p>{this.props.value}</p>
                <button onClick={this.props.incrementAction}>+</button>
            </div>

    );
  }
}
ReactCounter.propTypes = {
  value: PropTypes.number,
  incrementAction: PropTypes.func,
  decrementAction: PropTypes.func,
};
