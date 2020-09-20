import React, { Component } from 'react';
import styles from './Card.module.scss';
// import picture from '../../../assets/img/profilePicture.jpg';
// import projects from '../../data/data';

export class Card extends Component {
  render() {
    return (
      <div className={styles.cardWrapper}>
        <div className={styles.cardHeader}>
          <h4>Heading</h4>
        </div>
        <div className={styles.cardContent}>
          <ul>
            <li>hello</li>
            <li>there</li>
            <li>you</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
