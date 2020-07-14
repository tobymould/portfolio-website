import React, { Component } from 'react';
import styles from './Portfolio.module.scss';

import Card from './Card/Card';
import projects, { skillsIcons } from '../../data';

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
      <section id="portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          <div>
            <i className="fas fa-search"></i>
            <input type="search" placeholder="Search projects..." />
          </div>
          <section className="items"></section>
          <div>
            <div id="simpleModal" className="modal">
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
