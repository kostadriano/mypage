import React from 'react';

const Section = ({ children, title }) =>
  <div className="Section">
    <div className="Section__title">
      {title}
    </div>
    <div className="Section__content">
      {children}
    </div>
  </div>

export default Section;
