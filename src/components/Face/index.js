import React from 'react';
import ReactCursorPosition from 'react-cursor-position';
import Eye from './Eye.js';
import './Face.css';

const Face = ({ children }) =>
  <ReactCursorPosition className="Face">
    {children}

    <Eye
      leftDistance={400}
      topDistance={150}
      width={90}
      height={50}
    />

    <Eye
      leftDistance={700}
      topDistance={150}
      width={90}
      height={50}
    />
  </ReactCursorPosition>

export default Face;
