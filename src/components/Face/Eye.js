import React from 'react';
import Pupil from './Pupil';

class Eye extends React.Component {
  calculatePosition({ position, max, min, size }) {
    if (position < min + size / 2) {
      return 0;
    }

    if (position > max - (size / 2)) {
      return max - min - size;
    }

    return position - min - (size / 2)
  }

  render() {
    const { x, y } = this.props.position;
    const { leftDistance, topDistance, width, height } = this.props;

    return (
      <div className="Eye"
        style={{
          left: `${leftDistance}px`,
          top: `${topDistance}px`,
          height: `${height}px`,
          width: `${width}px`
        }}
      >
        <Pupil
          positionX={x}
          positionY={y}
          rangeX={{ min: leftDistance, max: leftDistance + width }}
          rangeY={{ min: topDistance, max: topDistance + height }}
          calculatePosition={this.calculatePosition}
        />
      </div>
    );
  };
};

export default Eye;
