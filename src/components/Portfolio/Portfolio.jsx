import React, { Component } from 'react';
import styles from './Portfolio.module.scss';

import Card from './Card/Card';
import projects, { skillsIcons } from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Portfolio extends Component {
  state = {};

  addPortfolioButtonsToHTMLFromDataFile = () => {
    projects.map((project, index) => {
      return <Card object={project} key={index} />;
    });

    //   // portfolioGridGlobal.innerHTML += buttons.join('');
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
              {this.addPortfolioButtonsToHTMLFromDataFile()}
              {/* <Card /> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
