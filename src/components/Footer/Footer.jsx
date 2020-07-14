import React, { Component } from 'react';
import styles from './Footer.module.scss';

export class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="text-center">
        <div className="container">
          <div>
            <p>toby.mould@icloud.com</p>
            <p>email: _____</p>
            <p>phone: _____</p>
          </div>
          <i className="fab fa-linkedin fa-2x" href="https://uk.linkedin.com/in/tobymould"></i>
        </div>
      </footer>
    );
  }
}

export default Footer;
