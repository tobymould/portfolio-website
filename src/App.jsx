import React, { Component } from 'react';
import Routes from './containers/Routes';
import Container from './containers/Container';
import styles from './sass/styles.scss';
// import { library } from './data/fa-library';

class App extends Component {
  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}

export default App;
