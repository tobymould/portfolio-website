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
  state = { modalState: false, projectState: null, eventSet: null, searchTerm: null, projectLanguages: {}, hover: false };
  //

  modalToggle = event => {
    console.log(`Event target value: ${event.target.value}`);
    this.setButtonPressed(event.target.value);
    this.setModalProject(event.target.value);
    this.setState({ modalState: !this.state.modalState });
    this.modalOpenFunction(event.target.value);
  };

  hoverToggle = event => {
    this.setState({ hover: !this.state.hover });
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
    const { modalState, projectState, projectLanguages } = this.state;
    const { modalOpenFunction, modalToggle, getGithubRepoLanguages, getGithubRepos } = this;

    const project = projects[projectButtonClicked];
    // console.log(project);

    if (this.state.modalState == true) {
      return <Modal project={projectState} modalState={modalState} modalOpenFunction={modalOpenFunction} modalToggle={modalToggle} getGithubRepoLanguages={getGithubRepoLanguages} getGithubRepos={getGithubRepos} projectLanguages={projectLanguages} />;
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
    // console.log('2nd start');
    const promises = listOfRepos.map(async repo => {
      const response2 = await fetch(repo.languages_url);
      const dataJSON2 = await response2.json();
      const langdata2 = { name: repo.name, languages: dataJSON2 };
      return langdata2;
    });

    const langdata2 = await Promise.all(promises);
    // console.log(langdata2);
    // console.log('2nd end');
    return langdata2;
  };

  convertToPercent = getLang1 => {
    let totals = [];

    const convertsEachProjectLanguageContributionToPercent = getLang1.map((project, index) => {
      const entries = Object.entries(project.languages);
      let sum = 0;
      // console.log(`initial value of Project ${index} is: ${sum}`);

      //2) Work out the total sum value of all the languages together in ONE project:
      const projectTotal = entries.map((number, index) => {
        // console.log(`value ${index} is: ${number[1]}`);
        sum = sum + parseFloat(number[1]);
        return sum;
      });

      //3) Convert the individual language values to percentages of total in ONE project:
      const percentageConversions = entries.map((number, index) => {
        // console.log(`${number}, ${index}`);
        const percent = ((number[1] / sum) * 100).toFixed(1);
        // console.log(`Percent of: ${percent}`);
        const replaced = (number[1] = percent);
        // console.log(`Replaced: ${number}`);
        return replaced;
      });

      // console.log(`Summary of values for Project ${index}: ${entries}`);

      let object = {};
      object = { projectName: project.name, languages: entries };
      totals.push(object);
    });
    // console.log(totals);
    return totals;
  };

  getGithubRepos = async () => {
    // console.log('1st start');
    const response1 = await fetch(`https://api.github.com/users/tobymould/repos`);
    const dataJSON1 = await response1.json();
    const getLang1 = await this.getGithubRepoLanguages(dataJSON1);
    const percentage = this.convertToPercent(getLang1);
    this.setState({ projectLanguage: percentage });
    // console.log('1st end');
  };

  // componentDidMount() {
  //   this.getGithubRepos().catch(error => {
  //     console.log(error);
  //   });
  // }

  render() {
    const { modalState, projectState, searchTerm, hover, projectLanguages } = this.state;
    const { modalOpenFunction, modalToggle, setButtonPressed, setModalProject, setSearchTerm, searchProjects, getGithubRepoLanguages, getGithubRepos, hoverToggle } = this;
    return (
      <>
        <Landing />
        <Navbar />
        <About />
        <Skills />
        <Portfolio modalState={modalState} projectState={projectState} modalOpenFunction={modalOpenFunction} modalToggle={modalToggle} setButtonPressed={setButtonPressed} setModalProject={setModalProject} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchProjects={searchProjects} hoverToggle={hoverToggle} hover={hover} projectLanguages={projectLanguages} />
        <Background />
        <Footer />
      </>
    );
  }
}

export default Home;
