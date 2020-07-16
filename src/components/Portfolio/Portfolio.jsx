import React, { Component } from 'react';
import styles from './Portfolio.module.scss';

// import Card from './Card/Card';
import projects from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Modal';

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
      const projectName = project.name.toLowerCase();
      console.log(projectName);

      if (projectName.includes(term)) {
        return (
          <button className={styles.item} value={index} key={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }} onClick={modalToggle}>
            <h4>{project.name}</h4>
          </button>
        );
      }
    });
    console.log(this.state.searchterm);
  };

  render() {
    const { modalState, projectState, modalOpenFunction, setSearchTerm, searchTerm } = this.props;
    return (
      <section className={styles.portfolioWrapper}>
        <div className={styles.container}>
          <h2>Portfolio</h2>
          <div>
            <FontAwesomeIcon icon={['fas', 'search']} />
            <input type="search" placeholder="Search projects..." onChange={setSearchTerm} />
          </div>
          <section className={styles.items}>{searchTerm ? this.searchProjects() : this.addPortfolioButtons()}</section>
          <div>
            {modalState ? modalOpenFunction() : null}
            {/* <Modal project={projectState} modalState={modalState} modalOpenFunction={modalOpenFunction} /> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
