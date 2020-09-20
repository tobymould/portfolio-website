import React, { Component } from 'react';
import styles from './ProjectButton.module.scss';
// import picture from '../../../assets/img/profilePicture.jpg';
// import projects from '../../data/data';

export class ProjectButton extends Component {
  render() {
    const { modalToggle, index, project } = this.props;
    return (
      <>
        <button className={styles.item} value={index} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image}) no-repeat center center/cover` }} onClick={modalToggle}>
          {project.name}
        </button>
      </>
    );
  }
}

export default ProjectButton;
