import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router';

export class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbarWrapper}>
        <ul>
          <li>
            <Link to="https://drive.google.com/file/d/13sQbPE_cf6EKGc_Xn6ppMWdQJPMgzR7o/view?usp=sharing" target="_blank">
              <FontAwesomeIcon icon={['fas', 'passport']} />
              Resume
            </Link>
          </li>
          <li>
            <Link to="#home">
              <FontAwesomeIcon icon={['fas', 'home']} />
              Home
            </Link>
          </li>
          <li>
            <Link to="#skills">
              <FontAwesomeIcon icon={['fas', 'microchip']} />
              Skills
            </Link>
          </li>
          <li>
            <Link to="#portfolio">
              <FontAwesomeIcon icon={['fas', 'code']} />
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="#background">
              <FontAwesomeIcon icon={['fas', 'user-circle']} />
              Background
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
