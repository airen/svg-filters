import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import PropTypes from 'prop-types';
import BoardSquare from '../BoardSquare';
import Knight from '../Knight';

import { moveKnight } from '../Game';

import './Board.css';

class Board extends Component {
  handleSquareClick(toX, toY) {
    moveKnight(toX, toY);
  }

  renderSquare(x, y, index) {
    const isBlack = (x + y) % 2 === 1;
    const [knightX, knightY] = this.props.knightPosition;

    return (
      <BoardSquare
        black={isBlack}
        onClick={() => this.handleSquareClick(x, y)}
        key={index}
        x={x}
        y={y}
        >
        {this.renderPiece(x, y)}
      </BoardSquare>
    );
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }

  render() {
    const squares = [];
    let index = 0;
    for (var y = 0; y < 8; y++) {
      for (var x = 0; x < 8; x++) {
        squares.push(this.renderSquare(x, y, index))
        index++;
      }
    }

    return (
      <div className="Board">
        { squares }
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

export default DragDropContext(HTML5Backend)(Board);
