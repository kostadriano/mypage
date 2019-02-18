import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NavbarIcons = () =>
  <div className="Navbar__icons">
    <a href='https://github.com/kostadriano'
      target="_blank">
      <FaGithub className="Navbar__icon" />
    </a>

    <a href='https://www.linkedin.com/in/adriano-costa-0121a1110/'
      target="_blank">
      <FaLinkedin className="Navbar__icon" />
    </a>
  </div>

export default NavbarIcons;
