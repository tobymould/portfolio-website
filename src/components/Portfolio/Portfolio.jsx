import React, { Component } from 'react';
import styles from './Portfolio.module.scss';

// import Card from './Card/Card';
import projects from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Portfolio extends Component {
  state = { modalOpen: false };

  modalToggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  modalOpen = event => {
    const buttonClicked = event;
    console.log(buttonClicked);
    // if (modalOpen == true) {
    //   return <Modal value={buttonClicked} />;
    // }
  };

  addPortfolioButtons = () => {
    return projects.map((project, index) => {
      return (
        <button className={styles.item} value={index} key={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }} onClick={this.modalToggle}>
          <h4>{project.name}</h4>
        </button>
      );
      // return <Card object={project} key={index} />;
    });
  };

  render() {
    return (
      <section className={styles.portfolioWrapper}>
        <div className={styles.container}>
          <h2>Portfolio</h2>
          <div>
            <FontAwesomeIcon icon={['fas', 'search']} />
            <input type="search" placeholder="Search projects..." />
          </div>
          <section className={styles.items}>{this.addPortfolioButtons()}</section>
          <div>
            <div className={`${styles.simpleModal} ${styles.modal}`}>{/* <Card /> */}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
