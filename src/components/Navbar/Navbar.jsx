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
            <a href="https://drive.google.com/drive/folders/1IxK3BPnABT3Qx8XJRiLsh4wWs5e1pMsX?usp=sharing" target="_blank">
              <div>
                <FontAwesomeIcon icon={['fas', 'passport']} className={styles.icon} />
              </div>
              <p> Resume </p>
            </a>
          </li>
          <li>
            <Link to="/">
              <div>
                <FontAwesomeIcon icon={['fas', 'home']} className={styles.icon} />
              </div>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="#skills">
              <div>
                <FontAwesomeIcon icon={['fas', 'microchip']} className={styles.icon} />
              </div>
              <p>Skills</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>
                <FontAwesomeIcon icon={['fas', 'code']} className={styles.icon} />
              </div>
              <p>Portfolio</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>
                <FontAwesomeIcon icon={['fas', 'user-circle']} className={styles.icon} />
              </div>
              <p>Background</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
