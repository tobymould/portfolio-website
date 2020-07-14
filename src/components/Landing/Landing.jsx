import React, { Component } from 'react';
import styles from './Landing.module.scss';

export class Landing extends Component {
  render() {
    return (
      <section className={styles.homeWrapper}>
        <div className={styles.homeOverlay}></div>
        <div className={styles.homeContent}>
          <h1>Toby Mould</h1>
          <h2>
            London-based <br />
            <span>Software Developer </span>
          </h2>
        </div>
      </section>
    );
  }
}

export default Landing;
