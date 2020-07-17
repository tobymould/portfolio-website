import React, { Component } from 'react';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import picture from '../../assets/img/profilePicture.jpg';

export class Background extends Component {
  render() {
    return (
      <section className={styles.aboutWrapper} class="container">
        <h2>About Me</h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={picture} alt="profilepicture" />
            <div className={styles.aboutDescription}>
              <h3>hello</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, blanditiis?</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Background;
