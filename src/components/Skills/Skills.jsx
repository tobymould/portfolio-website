import React, { Component } from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Skills extends Component {
  render() {
    return (
      <section className={styles.skillsWrapper}>
        <div className={styles.container}>
          <h2>Skills</h2>
          <p>
            I am a self-taught Front-End Web Developer looking for opportunties to transfer into the industry full-time to become a<span> Full Stack Web Developer</span>. I have a basis of knowledge and practice in the following:
          </p>

          <section className={styles.items}></section>
        </div>
      </section>
    );
  }
}

export default Skills;
