import React, { Component } from 'react';
import styles from './Portfolio.module.scss';

import Card from './Card/Card';
import projects from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Modal';

export class Portfolio extends Component {
  //
  addPortfolioButtons = () => {
    const { modalToggle, hoverToggle, hoverEffect } = this.props;
    return projects.map((project, index) => {
      return (
        <button className={styles.item} value={index} key={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }} onClick={modalToggle}>
          {project.name}
        </button>
      );
      // return <Card object={project} key={index} />;
    });
  };

  searchProjects = () => {
    const { modalToggle, searchTerm } = this.props;
    const term = searchTerm.toLowerCase();
    // console.log(term);
    let nullCounter = 0;

    const searchResult = projects.map((project, index) => {
      // Project Name Search:
      const projectName = project.name.toLowerCase();
      if (projectName.includes(term)) {
        return (
          <button className={styles.item} value={index} key={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }} onClick={modalToggle}>
            {project.name}
          </button>
        );
      }

      // Project Language Search:
      let singularLanguageArray = project.languages.map(language => {
        return language.toLowerCase().includes(term) ? true : false;
      });

      if (singularLanguageArray.includes(true)) {
        return (
          <button className={styles.item} value={index} key={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }} onClick={modalToggle}>
            {project.name}
          </button>
        );
      } else {
        nullCounter++;
      }
    });

    // Determines what to display if no positive matches:
    if (nullCounter == searchResult.length) {
      return <p className={styles.noResult}>Could not find the project </p>;
    } else {
      return searchResult;
    }
  };

  render() {
    const { modalState, projectState, modalOpenFunction, setSearchTerm, searchTerm, getGithubRepos, getGithubRepoLanguages, hoverToggle, hover, projectLanguages, modalToggle } = this.props;

    // this.hoverEffect();

    return (
      <section id="portfolio" className={styles.portfolioWrapper}>
        {/* <Container> */}
        <div className={styles.container}>
          <h2>Portfolio</h2>
          {/* <Card /> */}
          <div className={styles.search}>
            <div>
              <FontAwesomeIcon className={styles.searchIcon} icon={['fas', 'search']} />
            </div>
            <input type="search" placeholder="Search projects by language/title" onChange={setSearchTerm} />
          </div>
          <section className={styles.items}>{searchTerm ? this.searchProjects() : this.addPortfolioButtons()}</section>
          <div>{modalState && projectState ? <Modal projectState={projectState} modalState={modalState} modalToggle={modalToggle} getGithubRepoLanguages={getGithubRepoLanguages} getGithubRepos={getGithubRepos} projectLanguages={projectLanguages} /> : null}</div>
        </div>
        {/* </Container> */}
      </section>
    );
  }
}

export default Portfolio;
