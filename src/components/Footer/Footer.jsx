import React, { Component } from 'react';
import styles from './Footer.module.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footerWrapper}>
        <div className={styles.container}>
          <div></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
