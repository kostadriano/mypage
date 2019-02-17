import React from 'react';
import './Navbar.css';

const Navbar = ({ children }) => (
  <div>
    <div className="Navbar">
      <div className="Navbar__title">
        Do you like purple? I do!
      </div>

      {children}
    </div>
  </div>
)

export default Navbar;
