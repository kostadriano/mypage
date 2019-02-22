import React from 'react';
import ReactCursorPosition from 'react-cursor-position';
import Eye from './Eye.js';
import './Face.css';

const Face = () =>
  <ReactCursorPosition className="Face">
    <Eye
      leftDistance={75}
      topDistance={50}
      width={90}
      height={50}
    />

    <Eye
      leftDistance={325}
      topDistance={50}
      width={90}
      height={50}
    />
  </ReactCursorPosition>

export default Face;
