import React, { Component } from 'react';
import styles from './Container.module.scss';

export class Background extends Component {
  render() {
    return <section className={styles.containerWrapper}>{this.props.children}</section>;
  }
}

export default Background;
