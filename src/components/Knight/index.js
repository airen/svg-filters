import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../Constants';

import './Knight.css';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component {
  componentDidMount() {
  const img = new Image();
  img.src = 'https://placekitten.com/50/50';
  img.onload = () => this.props.connectDragPreview(img);
}

  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div className="Knight">
        <span role="img" aria-label="octopus">🐙</span>
      </div>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
