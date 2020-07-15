import React, { Component } from 'react';
import styles from './Portfolio.module.scss';

import Card from './Card/Card';
import projects from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Portfolio extends Component {
  state = {};

  addPortfolioButtons = () => {
    return projects.map((project, index) => {
      return (
        <button className={styles.item} value={index} key={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }}>
          <h4>{project.name}</h4>
        </button>
      );
      // return <Card object={project} key={index} />;
    });
  };

  render() {
    // console.log(projects);
    // console.log(this.addPortfolioButtonsToHTMLFromDataFile());

    return (
      <section className={styles.portfolioWrapper}>
        <div className={styles.container}>
          <h2>Portfolio</h2>
          <div>
            <FontAwesomeIcon icon={['fas', 'search']} />
            <input type="search" placeholder="Search projects..." />
          </div>
          <section className={styles.items}></section>
          <div>
            <div className={`${styles.simpleModal} ${styles.modal}`}>
              {this.addPortfolioButtons()}
              {/* <Card /> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
