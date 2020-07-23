import React, { Component } from 'react';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import projects from '../../data/data';

export class Modal extends Component {
  addTechIcons = () => {
    const { project } = this.props;
    // console.log(project);
    return project.technology.icons.map((item, index) => {
      return <FontAwesomeIcon className={item.className} icon={[item.icon[0], item.icon[1]]} key={index} />;
    });
  };

  addTechImages = () => {
    const { project } = this.props;
    console.log(project.technology.images);
    return project.technology.images.map((item, index) => {
      return <img className={item.className} src={item.url} alt={item.className} key={index} />;
    });
  };

  // notableFeatures = () => {
  //   const { projectState, projectLanguages } = this.props;
  //   // console.log(project.features);
  //   return test.project.features.map((feature, index) => {
  //     return (
  //       <li key={index}>
  //         {index + 1}. {feature}
  //       </li>
  //     );
  //   });
  // };

  addTech = () => {
    // this.addTechIcons();
    this.addTechImages();
  };

  // test = () => {
  //   const { projectLanguages } = this.props;
  //   const { projectState } = this.state;
  //   console.log(projectLanguages[0].projectName);
  //   // projectLanguages.map(project => {
  //   //   if (project.projectName.include(projectState.name)) {
  //   //     console.log(project);
  //   //   }
  //   // });
  // };

  render() {
    const { modalState, modalOpenFunction, modalToggle, getGithubRepoLanguages, getGithubRepos, projectLanguages, projectState } = this.props;
    console.log('project being used in Modal:');
    console.log(projectLanguages);
    // const project = projects[0];

    return (
      <div className={styles.modalOverlayWrapper} onClick={modalToggle}>
        <section className={styles.modalContentWrapper}>
          <div className={styles.modalContent}>
            {/* <!-- Modal Content on Project --> */}
            <article>
              {/* <!-- Column-1 --> */}
              <div className={styles.column1}>
                {/* <!-- Summary Section --> */}
                <div className={styles.summary}>
                  <h3>{modalState.name}</h3>
                  <div className={styles.imageSection}>
                    <a href={modalState.live}>
                      <img src={modalState.image} alt={modalState.name} className={styles.image} />
                    </a>
                  </div>
                  <div className={styles.buttons}>
                    <a href={modalState.live} target="_blank">
                      <FontAwesomeIcon icon={['fas', 'desktop']} />
                      <p>Live Preview</p>
                    </a>
                    <a href={modalState.github} target="_blank">
                      <FontAwesomeIcon icon={['fas', 'code-branch']} />
                      <p>Source Private</p>
                    </a>
                  </div>
                  <p>{modalState.overview}</p>
                </div>

                {/* <!-- Technology Section --> */}
                <div className={styles.tech}>
                  <h4>Technologies Used</h4>
                  <div className={styles.table}>{/* <ul className={styles.langList}>{this.addTech()}</ul> */}</div>
                  <div className={styles.langPercent}>
                    {/* {this.test()} */}
                    {/* <div style={{width: projectStateLanguages[]:, background: }}> </div> */}
                    {/* {projectState ? this.test() : null} */}
                    {/* {projectState ? this.getProjectLanguagePercent() : null} */}
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                  </div>
                </div>
              </div>

              {/* <!-- Column 2 --> */}
              <div className={styles.column2}>
                {/* <!-- Role Content --> */}
                <div className={styles.role}>
                  <h4>My Role</h4>
                  <p>{modalState.role}</p>
                </div>

                {/* <!-- Difficulties Content --> */}
                <div className={styles.diff}>
                  <h4>Project Difficulties</h4>
                  <p>{modalState.difficult}</p>
                </div>

                {/* <!-- Solution Content --> */}
                <div className={styles.sol}>
                  <h4>My Solution</h4>
                  <p>{modalState.solution}</p>
                </div>

                {/* <!-- Notable Features Content --> */}
                <div className={styles.feat}>
                  <h4>Notable Features</h4>
                  {/* <ul>{this.notableFeatures()}</ul> */}
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;
