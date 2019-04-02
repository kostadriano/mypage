import React from 'react';

const Pupil = ({ rangeX, rangeY, calculatePosition, positionX, positionY }) => {
  const height = 20;
  const width = 20;

  const x = calculatePosition({
    position: positionX,
    max: rangeX.max,
    min: rangeX.min,
    size: width
  });

  const y = calculatePosition({
    position: positionY,
    max: rangeY.max,
    min: rangeY.min,
    size: height
  });

  return (
    <div className="Pupil"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        height: `${height}px`,
        width: `${width}px`
      }}
    >
    </div>
  )
};

export default Pupil;
