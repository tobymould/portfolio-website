import React, { Component } from 'react';
import styles from './Home.module.scss';

import Landing from '../Landing';
import Navbar from '..//Navbar';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Background from '../Background';
import Footer from '../Footer';

export class Home extends Component {
  render() {
    return (
      <>
        <Landing />
        {/* <Navbar />
        <Skills />
        <Portfolio />
        <Background />
        <Footer /> */}
      </>
    );
  }
}

export default Home;
