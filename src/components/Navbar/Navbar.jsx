import React, { Component } from 'react';
import styles from './Navbar.module.scss';

import { Link } from '@reach/router';

export class Navbar extends Component {
  render() {
    return (
      <nav id="navbar">
        <ul>
          <li>
            <Link to="https://drive.google.com/file/d/13sQbPE_cf6EKGc_Xn6ppMWdQJPMgzR7o/view?usp=sharing" target="_blank">
              <i className="fas fa-passport"></i>Resume
            </Link>
          </li>
          <li>
            <Link to="#home">
              <i className="fas fa-home"></i>Home
            </Link>
          </li>
          <li>
            <Link to="#skills">
              <i className="fas fa-microchip"></i>Skills
            </Link>
          </li>
          <li>
            <Link to="#portfolio">
              <i className="fas fa-code"></i>Portfolio
            </Link>
          </li>
          <li>
            <Link to="#background">
              <i className="fas fa-user-circle"></i>Background
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
