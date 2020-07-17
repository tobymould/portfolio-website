import React, { Component } from 'react';
import styles from './Portfolio.module.scss';

import Card from './Card/Card';
import projects from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Modal';
// import Container from '../../containers/Container';

export class Portfolio extends Component {
  //
  addPortfolioButtons = () => {
    const { modalToggle } = this.props;
    return projects.map((project, index) => {
      return (
        <button className={styles.item} value={index} key={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }} onClick={modalToggle}>
          <h4>{project.name}</h4>
        </button>
      );
      // return <Card object={project} key={index} />;
    });
  };

  searchProjects = () => {
    const { modalToggle, searchTerm } = this.props;
    const term = searchTerm.toLowerCase();
    console.log(term);

    return projects.map((project, index) => {
      // Project Name Search:
      const projectName = project.name.toLowerCase();
      if (projectName.includes(term)) {
        return (
          <button className={styles.item} value={index} key={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }} onClick={modalToggle}>
            <h4>{project.name}</h4>
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
            <h4>{project.name}</h4>
          </button>
        );
      }
    });
  };

  render() {
    const { modalState, projectState, modalOpenFunction, setSearchTerm, searchTerm, getGithubRepos, getGithubRepoLanguages } = this.props;
    return (
      <section className={styles.portfolioWrapper}>
        {/* <Container> */}
        <div className={styles.container}>
          <h2>Portfolio</h2>
          {/* <Card /> */}
          <div>
            <FontAwesomeIcon icon={['fas', 'search']} />
            <input type="search" placeholder="Search projects..." onChange={setSearchTerm} />
          </div>
          <section className={styles.items}>{searchTerm ? this.searchProjects() : this.addPortfolioButtons()}</section>
          <div>{modalState ? modalOpenFunction() : null}</div>
        </div>
        {/* </Container> */}
      </section>
    );
  }
}

export default Portfolio;
