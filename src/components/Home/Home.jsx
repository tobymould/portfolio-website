import React, { Component } from 'react';
import styles from './Home.module.scss';

import Landing from '../Landing';
import About from '../About';
import Navbar from '..//Navbar';
import Skills from '../Skills';
import Modal from '../Modal';
import Portfolio from '../Portfolio';
import Background from '../Background';
import Footer from '../Footer';

import projects from '../../data/data';

export class Home extends Component {
  state = { modalState: false, projectState: null, eventSet: null, searchTerm: null, projectLanguage: {} };
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
    // const languages = this.getGithubRepos();
    // this.setState({ projectLanguage: languages });
    // console.log(this.state.projectLanguage);
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
      return <Modal project={this.state.projectState} modalState={this.state.modalState} modalOpenFunction={this.modalOpenFunction} modalToggle={this.modalToggle} getGithubRepoLanguages={this.getGithubRepoLanguages} getGithubRepos={this.getGithubRepos} />;
    } else {
      return null;
    }
    // });
  };

  setSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
  };

  getGithubRepoLanguages = async listOfRepos => {
    console.log('2nd start');
    const promises = listOfRepos.map(async repo => {
      const response2 = await fetch(repo.languages_url);
      const dataJSON2 = await response2.json();
      const langdata2 = { name: repo.name, languages: dataJSON2 };
      return langdata2;
    });

    const langdata2 = await Promise.all(promises);
    console.log(langdata2);
    console.log('2nd end');
  };

  getGithubRepos = async () => {
    console.log('1st start');
    const response1 = await fetch(`https://api.github.com/users/tobymould/repos`);
    const dataJSON1 = await response1.json();
    // return dataJSON1;
    const getLang1 = await this.getGithubRepoLanguages(dataJSON1);
    console.log('1st end');
    return getLang1;
    // return getLang;
  };

  render() {
    this.getGithubRepos();
    // .then(projectLanguages => ));

    return (
      <>
        <Landing />
        {/* <About /> */}
        <Navbar />
        <Skills />
        <Portfolio modalState={this.state.modalState} projectState={this.state.projectState} modalOpenFunction={this.modalOpenFunction} modalToggle={this.modalToggle} setButtonPressed={this.setButtonPressed} setModalProject={this.setModalProject} searchTerm={this.state.searchTerm} setSearchTerm={this.setSearchTerm} searchProjects={this.searchProjects} getGithubRepoLanguages={this.getGithubRepoLanguages} getGithubRepos={this.getGithubRepos} />
        <Background />
        <Footer />
      </>
    );
  }
}

export default Home;
