import React, { Component } from 'react';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import picture from '../../assets/img/profilePicture.jpg';

class About extends Component {
  render() {
    return (
      <section className={styles.aboutWrapper}>
        <div className={styles.container}>
          <h2>About</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutPicture}></div>
            <p>​My name is Toby, I am 28 years old, and I am from South-East London. I was born in the UK and am working toward transitioning into a full-time full-stack developer. I have decided to take this route because I was not satisfied with the work I have been doing and want to learn a new skill and work in an industry where my performance is recognised.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
