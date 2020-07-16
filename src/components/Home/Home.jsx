import React, { Component } from 'react';
import styles from './Home.module.scss';

import Landing from '../Landing';
import Navbar from '..//Navbar';
import Skills from '../Skills';
import Modal from '../Modal';
import Portfolio from '../Portfolio';
import Background from '../Background';
import Footer from '../Footer';

import projects from '../../data/data';

export class Home extends Component {
  state = { modalState: false, projectState: null, eventSet: null, searchTerm: null };
  //

  modalToggle = event => {
    console.log(`Event target value: ${event.target.value}`);
    // console.log(event.key);
    // console.log(event.target);
    // console.log(buttonClicked);
    this.setButtonPressed(event.target.value);
    this.setModalProject(event.target.value);
    this.setState({ modalState: !this.state.modalState });
    this.modalOpenFunction(event.target.value);
  };

  // , eventSet: event.target.value, projectState: event.target.value

  setButtonPressed = projectButtonClicked => {
    // console.log(`Button pressed: ${projectButtonClicked}`);
    this.setState({ eventSet: projectButtonClicked });
    // console.log(`Event: ${this.state.event}`);
  };

  setModalProject = projectButtonClicked => {
    // console.log(projects[projectButtonClicked]);
    this.setState({ projectState: projects[projectButtonClicked] });
    // console.log(`projectState: ${this.state.projectState}`);
  };

  modalOpenFunction = projectButtonClicked => {
    const project = projects[projectButtonClicked];
    // console.log(project);

    if (this.state.modalState == true) {
      return <Modal project={this.state.projectState} modalState={this.state.modalState} modalOpenFunction={this.modalOpenFunction} modalToggle={this.modalToggle} />;
    } else {
      return null;
    }
    // });
  };

  setSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
  };

  searchProjects = () => {
    const { searchTerm } = this.state;
    const term = searchTerm.toLowerCase();
    console.log(term);

    return projects.filter((project, index) => {
      const projectName = project.name.toLowerCase();
      console.log(projectName);

      if (projectName.includes(term)) {
        return (
          <button className={styles.item} value={index} key={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }} onClick={this.modalToggle}>
            <h4>{project.name}</h4>
          </button>
        );
      }
    });
    console.log(this.state.searchterm);
  };

  render() {
    return (
      <>
        <Landing />
        <Navbar />
        <Skills />
        <Portfolio modalState={this.state.modalState} projectState={this.state.projectState} modalOpenFunction={this.modalOpenFunction} modalToggle={this.modalToggle} setButtonPressed={this.setButtonPressed} setModalProject={this.setModalProject} searchTerm={this.state.searchTerm} setSearchTerm={this.setSearchTerm} searchProjects={this.searchProjects} />
        <Background />
        <Footer />
      </>
    );
  }
}

export default Home;
