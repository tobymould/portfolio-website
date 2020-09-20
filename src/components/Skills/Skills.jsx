import React, { Component } from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../../data/data';
// import { firebase, postman } from '../../assets';

// import variables from '../../sass/variables';

export class Skills extends Component {
  state = {};

  addFrontendIcons = () => {
    // console.log(skills.icons);
    return skills.icons[0].frontend.map((item, index) => {
      // console.log(item.icon[0], item.icon[1]);
      // console.log(item.colour);
      return <FontAwesomeIcon className={'m-1'} icon={[item.icon[0], item.icon[1]]} style={{ color: item.colour }} size={item.sizeGeneral} key={index} />;
    });
  };

  addBackendIcons = () => {
    // console.log(skills.icons);
    return skills.icons[0].backend.map((item, index) => {
      // console.log(item.icon[0], item.icon[1]);
      // console.log(item.colour);
      return <FontAwesomeIcon icon={[item.icon[0], item.icon[1]]} style={{ color: item.colour }} size={item.sizeGeneral} key={index} />;
    });
  };

  addOtherIcons = () => {
    // console.log(skills.icons);
    return skills.icons[0].other.map((item, index) => {
      // console.log(item.icon[0], item.icon[1]);
      // console.log(item.colour);
      return <FontAwesomeIcon className={'m-1'} icon={[item.icon[0], item.icon[1]]} style={{ color: item.colour }} size={item.sizeGeneral} key={index} />;
    });
  };

  addFrontendImages = () => {
    // console.log(skills.images);
    return skills.images[0].frontend.map(({ className, url }, index) => {
      // console.log(item.className);
      // console.log(item.url);
      return <img className={className} src={url} alt={className} key={index} />;
    });
  };

  addBackendImages = () => {
    // console.log(skills.images);
    return skills.images[0].backend.map(({ className, url }, index) => {
      // console.log(item.className);
      // console.log(item.url);
      return <img className={className} src={url} alt={className} key={index} />;
    });
  };

  addOtherImages = () => {
    // console.log(skills.images);
    return skills.images[0].other.map(({ className, url }, index) => {
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
      <section id="skills" className={styles.skillsWrapper}>
        {/* <div className={styles.container}> */}
        <h2>Skills</h2>
        <p>
          I am a self-taught Full-Stack Web Developer looking for <span> Developer</span> opportunties. I have a basis of knowledge and practice in the following:
        </p>
        <section className={styles.items}>
          <div className={styles.frontend}>
            <h3>Frontend</h3>
            <div>
              {this.addFrontendIcons()}
              {this.addFrontendImages()}
            </div>
          </div>
          <div className={styles.backend}>
            <h3>Backend</h3>
            <div>
              {this.addBackendIcons()}
              {this.addBackendImages()}
            </div>
          </div>
          <div className={styles.other}>
            <h3>Other</h3>
            <div>
              {this.addOtherIcons()}
              {this.addOtherImages()}
            </div>
          </div>
        </section>
        {/* </div> */}
      </section>
    );
  }
}

export default Skills;
