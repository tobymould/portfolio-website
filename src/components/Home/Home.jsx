import React, { Component } from 'react';
import styles from './Home.module.scss';

import Landing from '../Landing';
import About from '../About';
import Navbar from '..//Navbar';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Background from '../Background';
import Footer from '../Footer';

import projects from '../../data/data';

export class Home extends Component {
  state = { modalState: false, projectState: null, eventSet: null, searchTerm: null, projectLanguages: {}, hover: false };
  //

  modalToggle = event => {
    const { projectLanguages } = this.state;
    // console.log(`Event target value: ${event.target.value}`);

    const val = event.target.value;
    this.setState({ modalState: !this.state.modalState }, () => this.modalOpenFunction(val));
  };

  modalOpenFunction = projectButtonClicked => {
    const { modalState, projectState, projectLanguages } = this.state;
    const { modalOpenFunction, modalToggle, getGithubRepoLanguages, getGithubRepos } = this;

    const dataFileUrl = projects[projectButtonClicked];

    // console.log(dataFileUrl);
    // console.log('datafile', 'github');
    // console.log(dataFileUrl[2].github, projects.url);

    if (this.state.modalState) {
      const selectedProject = projectLanguages.filter(project => {
        return dataFileUrl.github === project.url;
      })[0];
      // console.log('selectedProject');
      // console.log(selectedProject);

      this.setState({ projectState: selectedProject });
    }
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

      let thisProject = projects.find(project => project.github === repo.html_url);

      console.log('this project matched:');
      console.log(thisProject);

      const langdata2 = { project: { ...thisProject }, name: repo.name, languages: dataJSON2, url: repo.html_url };

      console.log('This is the resulting objec:');
      console.log(langdata2);
      return langdata2;
    });

    const langdata2 = await Promise.all(promises);
    console.log('This is the resulting array:');
    console.log(langdata2);
    // console.log('2nd end');
    return langdata2;
  };

  convertToPercent = getLang1 => {
    let totals = [];

    const convertsEachProjectLanguageContributionToPercent = getLang1.map((project, index) => {
      const entries = Object.entries(project.languages);
      // console.log('entries:');
      // console.log(entries);
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
      object = { ...project, languages: entries, url: project.url };
      totals.push(object);
    });
    console.log('This is the resulting % array resulting:');
    console.log(totals);
    // const final = { ...totals };
    return totals;
  };

  getGithubRepos = async () => {
    // console.log('1st start');
    const response1 = await fetch(`https://api.github.com/users/tobymould/repos`);
    const dataJSON1 = await response1.json();
    // console.log(dataJSON1);
    const getLang1 = await this.getGithubRepoLanguages(dataJSON1);
    const percentage = this.convertToPercent(getLang1);
    this.setState({ projectLanguages: percentage });
    console.log('this.state.projectLanguages:');
    console.log(this.state.projectLanguages);
    // console.log('1st end');
  };

  componentDidMount() {
    this.getGithubRepos().catch(error => {
      console.log(error);
    });
  }

  render() {
    const { modalState, projectState, searchTerm, hover, projectLanguages } = this.state;
    const { modalOpenFunction, modalToggle, setButtonPressed, setModalProject, setSearchTerm, searchProjects, getGithubRepoLanguages, getGithubRepos, hoverToggle } = this;
    return (
      <>
        <Landing />
        <Navbar />
        <Skills />
        <Portfolio modalState={modalState} projectState={projectState} modalOpenFunction={modalOpenFunction} modalToggle={modalToggle} setButtonPressed={setButtonPressed} setModalProject={setModalProject} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchProjects={searchProjects} hoverToggle={hoverToggle} hover={hover} projectLanguages={projectLanguages} modalToggle={modalToggle} />
        <Background />
        {/* <About /> */}
        <Footer />
      </>
    );
  }
}

export default Home;
