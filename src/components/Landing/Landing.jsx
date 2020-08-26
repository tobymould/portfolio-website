import React, { Component } from 'react';
import styles from './Landing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Landing extends Component {
  render() {
    return (
      <section id="landing" className={styles.homeWrapper}>
        <div className={styles.homeOverlay}></div>
        <div className={styles.homeContent}>
          <h1>Toby Mould</h1>
          <h2>
            London-based <br />
            <span>Software Developer </span>
          </h2>

          <h4>toby.mould@icloud.com</h4>
          <a href="https://uk.linkedin.com/in/tobymould" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size={'3x'} href="https://uk.linkedin.com/in/tobymould" />
          </a>
        </div>
      </section>
    );
  }
}

export default Landing;
