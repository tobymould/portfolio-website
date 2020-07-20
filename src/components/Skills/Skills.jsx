import React, { Component } from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../../data/data';
// import { firebase, postman } from '../../assets';

// import variables from '../../sass/variables';

export class Skills extends Component {
  state = {};

  addSkillIcons = () => {
    // console.log(skills.icons);
    return skills.icons.map((item, index) => {
      // console.log(item.icon[0], item.icon[1]);
      // console.log(item.colour);
      return <FontAwesomeIcon icon={[item.icon[0], item.icon[1]]} style={{ color: item.colour }} size={item.sizeGeneral} key={index} />;
    });
  };

  addSkillImages = () => {
    // console.log(skills.images);
    return skills.images.map(({ className, url }, index) => {
      // console.log(item.className);
      // console.log(item.url);
      return <img className={className} src={url} alt={className} key={index} />;
    });
  };

  // addSkills = () => {
  //   this.addSkillIcons();
  //   this.addSkillImages();
  // };

  render() {
    // console.log(skills.icons[0].icon[0]);
    // console.log(skills.icons[0].icon[1]);
    return (
      <section className={styles.skillsWrapper}>
        {/* <div className={styles.container}> */}
        <h2>Skills</h2>
        <p>
          I am a self-taught Front-End Web Developer looking for opportunties to transfer into the industry full-time to become a<span> Full Stack Web Developer</span>. I have a basis of knowledge and practice in the following:
        </p>
        <section className={styles.items}>
          {this.addSkillIcons()}
          {this.addSkillImages()}
        </section>
        {/* </div> */}
      </section>
    );
  }
}

export default Skills;
