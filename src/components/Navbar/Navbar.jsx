import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbarWrapper}>
        <ul>
          <li>
            <a href="https://drive.google.com/drive/folders/1IxK3BPnABT3Qx8XJRiLsh4wWs5e1pMsX?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div>
                <FontAwesomeIcon icon={['fas', 'passport']} className={styles.icon} />
              </div>
              <p> Resume </p>
            </a>
          </li>
          <li>
            <a href="#landing">
              <div>
                <FontAwesomeIcon icon={['fas', 'home']} className={styles.icon} />
              </div>
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="#skills">
              <div>
                <FontAwesomeIcon icon={['fas', 'microchip']} className={styles.icon} />
              </div>
              <p>Skills</p>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <div>
                <FontAwesomeIcon icon={['fas', 'code']} className={styles.icon} />
              </div>
              <p>Portfolio</p>
            </a>
          </li>
          <li>
            <a href="#background">
              <div>
                <FontAwesomeIcon icon={['fas', 'user-circle']} className={styles.icon} />
              </div>
              <p>Background</p>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
