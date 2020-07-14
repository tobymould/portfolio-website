import React, { Component } from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footerWrapper}>
        <div className={styles.container}>
          <div>
            <p>toby.mould@icloud.com</p>
            <p>email: _____</p>
            <p>phone: _____</p>
          </div>
          <FontAwesomeIcon icon={['fab', 'linkedin']} href="https://uk.linkedin.com/in/tobymould" />
        </div>
      </footer>
    );
  }
}

export default Footer;
