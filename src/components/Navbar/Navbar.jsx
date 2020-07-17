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
              <div>
                <FontAwesomeIcon icon={['fas', 'passport']} />
              </div>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>
                <FontAwesomeIcon icon={['fas', 'home']} />
              </div>
              Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>
                <FontAwesomeIcon icon={['fas', 'microchip']} />
              </div>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>
                <FontAwesomeIcon icon={['fas', 'code']} />
              </div>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>
                <FontAwesomeIcon icon={['fas', 'user-circle']} />
              </div>
              Background
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
