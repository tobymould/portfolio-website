import React, { Component } from 'react';
import styles from './Background.module.scss';

export class Background extends Component {
  render() {
    return (
      <section id="background">
        <div className="container py-2">
          <h2>Background</h2>
          <p>I have worked in a variety of domains to date:</p>
          <br />
          <div className="items py-1">
            <div className="item">
              <i className="software fab fa-connectdevelop fa-2x"></i>
              <h3>Software Development</h3>
              <p>Currently, I am teaching myself to code so to transition my career path toward becoming a professional Software Developer.</p>
            </div>
            <div className="item">
              <i className="fas fa-space-shuttle fa-2x space"></i>
              <h3>Space Engineering</h3>
              <p>I have 4 years experience in this domain, both as an entrepreneur and engineer.</p>
            </div>
            <div className="item">
              <i className="fas fa-flask fa-2x chemistry"></i>
              <h3>Chemistry</h3>
              <p>I have 4 years experience in this domain, working on high-tech materials and industrial projects.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Background;
