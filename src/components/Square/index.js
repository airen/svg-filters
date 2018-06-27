import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Square.css';

class Square extends Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';

    return (
      <div
        className="Square"
        style={{ backgroundColor: fill }}
        onClick={this.props.onClick}
        >
        {this.props.children}
      </div>
    );
  }
}

export default Square;

Square.propTypes = {
  black: PropTypes.bool
};
