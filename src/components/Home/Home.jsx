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
  state = { modalState: false, projectState: null, eventSet: null };
  //

  modalToggle = event => {
    console.log(`Event target value: ${event.target.value}`);
    // console.log(event.key);
    // console.log(event.target);
    // console.log(buttonClicked);
    this.setButtonPressed(event.target.value);
    this.setModalProject(event.target.value);
    this.modalOpenFunction(event.target.value);
    this.setState({ modalState: !this.state.modalState });
  };

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
    console.log(project);

    if (this.state.modalState == true) {
      return <Modal project={this.state.projectState} modalState={this.state.modalState} modalOpenFunction={this.modalOpenFunction} modalToggle={this.modalToggle} />;
    } else {
      return null;
    }
    // });
  };

  render() {
    return (
      <>
        <Landing />
        <Navbar />
        <Skills />
        <Portfolio modalState={this.state.modalState} projectState={this.state.projectState} modalOpenFunction={this.modalOpenFunction} modalToggle={this.modalToggle} setButtonPressed={this.setButtonPressed} setModalProject={this.setModalProject} />
        <Background />
        <Footer />
      </>
    );
  }
}

export default Home;
