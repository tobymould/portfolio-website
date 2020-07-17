import React, { Component } from 'react';
import styles from './Background.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Background extends Component {
  render() {
    return (
      <section className={styles.backgroundWrapper}>
        <div className={styles.container}>
          <h2>Background</h2>
          <p>I have worked in a variety of domains to date:</p>
          <br />
          <div className={styles.items}>
            <div className={styles.item}>
              <div>
                <FontAwesomeIcon icon={['fas', 'desktop']} className={styles.software} size="2x" />
              </div>
              <h3>Software Development</h3>
              <p>Currently, I am teaching myself to code so to transition my career path toward becoming a professional Software Developer.</p>
            </div>
            <div className={styles.item}>
              <div>
                <FontAwesomeIcon icon={['fas', 'space-shuttle']} size="2x" className={styles.space} />
              </div>
              <h3>Space Engineering</h3>
              <p>I have 4 years experience in this domain, both as an entrepreneur and engineer.</p>
            </div>
            <div className={styles.item}>
              <div>
                <FontAwesomeIcon icon={['fas', 'flask']} className={styles.chemistry} size="2x" />
              </div>
              <h3>Chemistry</h3>
              <p>I have 4 years experience in this domain, working on high-tech materials and industrial projects.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Background;
