import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from '../../components/Home';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Home default />
      </Router>
    );
  }
}

export default Routes;
