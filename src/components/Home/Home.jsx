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
  state = { modalState: false, projectState: projects[0] };
  modalToggle = () => {
    this.setState({ modalState: !this.state.modalState });
  };

  setModalProject = project => {
    this.setState({ projectState: project });
  };

  modalOpenFunction = event => {
    this.modalToggle();
    const buttonClicked = event.target.value;
    const project = projects[{ buttonClicked }];
    this.setModalProject(project);

    return project.map(item => {
      if (this.state.modalState == true) {
        return <Modal project={this.state.projectState} />;
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <>
        <Landing />
        <Navbar />
        <Skills />
        <Portfolio modalState={this.state.modalState} projectState={this.state.projectState} modalOpenFunction={this.modalOpenFunction} />
        <Background />
        <Footer />
      </>
    );
  }
}

export default Home;
