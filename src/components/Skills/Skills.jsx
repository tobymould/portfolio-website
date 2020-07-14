import React, { Component } from 'react';
import styles from './Skills.module.scss';

export class Skills extends Component {
  render() {
    return (
      <div>
        {/* <!------------------------->
    <!-- 3. SKILLS SECTION -->
    <!-------------------------> */}
        <section id="skills">
          <div className="container">
            <h2>Skills</h2>
            <p>
              I am a self-taught Front-End Web Developer looking for opportunties to transfer into the industry full-time to become a<span> Full Stack Web Developer</span>. I have a basis of knowledge and practice in the following:
            </p>

            <section className="items"></section>
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
