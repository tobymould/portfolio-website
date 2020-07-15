import React, { Component } from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../../data/data';

export class Skills extends Component {
  state = {};

  addSkillIcons = () => {
    // console.log(skills.icons);
    return skills.icons.map((item, index) => {
      return <FontAwesomeIcon className={item.className} icon={[item.icon[0], item.icon[1]]} key={index} />;
    });
  };
  addSkillImages = () => {
    // console.log(skills.icons);
    return skills.images.map((item, index) => {
      return <img className={item.className} src={item.url} alt={item.className} key={index} />;
    });
  };

  addSkills = () => {
    this.addSkillIcons();
    this.addSkillImages();
  };

  render() {
    return (
      <section className={styles.skillsWrapper}>
        <div className={styles.container}>
          <h2>Skills</h2>
          <p>
            I am a self-taught Front-End Web Developer looking for opportunties to transfer into the industry full-time to become a<span> Full Stack Web Developer</span>. I have a basis of knowledge and practice in the following:
          </p>

          <section className={styles.items}>{this.addSkills()}</section>
        </div>
      </section>
    );
  }
}

export default Skills;
