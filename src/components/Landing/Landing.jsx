import React, { Component } from 'react';
import styles from './Landing.module.scss';

export class Landing extends Component {
  render() {
    return (
      <div>
        {/* <!------------------------->
    <!-- 1. LANDING SECTION -->
    <!-------------------------> */}
        <section id="home">
          <div id="home-overlay"></div>
          <div id="home-content">
            <h1>Toby Mould</h1>
            <h2>
              London-based <br />
              <span>Software Developer </span>
            </h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
