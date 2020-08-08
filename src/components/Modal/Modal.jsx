import React, { Component } from 'react';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import projects from '../../data/data';

export class Modal extends Component {
  addTechIcons = () => {
    const { projectState } = this.props;
    // console.log(project);
    return projectState.technology.icons.map((item, index) => {
      return <FontAwesomeIcon icon={[item.icon[0], item.icon[1]]} style={{ color: item.colour }} size={item.sizeModal} key={index} />;
    });

    // const { project } = this.props;
    // return project.technology.images.map((item, index) => {
    //   return <img className={item.className} src={item.url} alt={item.className} key={index} />;
    // });
  };

  // addTechImages = () => {
  //   const { project } = this.props;
  //   console.log(project.technology.images);
  //   return project.technology.images.map((item, index) => {
  //     return <img className={item.className} src={item.url} alt={item.className} key={index} />;
  //   });
  // };

  notableFeatures = () => {
    const { projectState, projectLanguages } = this.props;
    // console.log(project.features);
    return projectState.features.map((feature, index) => {
      return (
        <li key={index}>
          <span>({index + 1})</span> {feature}
        </li>
      );
    });
  };

  addTech = () => {
    // this.addTechIcons();
    this.addTechImages();
  };

  languagesPercentage = () => {
    const { projectState } = this.props;

    return projectState.languages.map((language, index) => {
      const languageName = language[0].toLowerCase();
      console.log(languageName, language[1], index);
      return (
        <div className={languageName} style={{ width: `${language[1]}%`, height: '10px' }} key={index}>
          {' '}
        </div>
      );
    });
  };

  languagesPercentage2 = () => {
    const { projectState } = this.props;

    return projectState.languages.map((language, index) => {
      const languageName = language[0].toLowerCase();
      return (
        <>
          <div className={`${languageName}-text`} key={index}>
            {languageName}: <br /> {language[1]}%
          </div>
        </>
      );
    });
  };

  render() {
    const { modalState, modalOpenFunction, modalToggle, getGithubRepoLanguages, getGithubRepos, projectLanguages, projectState } = this.props;

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
                  <h3>{projectState.name}</h3>
                  <div className={styles.imageSection}>
                    <a href={projectState.live}>
                      <img src={projectState.image} alt={projectState.name} className={styles.image} />
                    </a>
                  </div>
                  <div className={styles.buttons}>
                    <a href={projectState.live} target="_blank">
                      <FontAwesomeIcon icon={['fas', 'desktop']} />
                      <p>Live Preview</p>
                    </a>
                    <a href={projectState.github} target="_blank">
                      <FontAwesomeIcon icon={['fas', 'code-branch']} />
                      <p>Source Private</p>
                    </a>
                  </div>
                  <p className={styles.overview}>{projectState.overview}</p>
                </div>

                {/* <!-- Technology Section --> */}
                <div className={styles.tech}>
                  <h4>Technologies Used</h4>
                  <div className={styles.techList}>{this.addTechIcons()}</div>
                  <div className={styles.langPercent}>
                    <div className={styles.chart}>{this.languagesPercentage()}</div>
                    <div className={styles.name}>{this.languagesPercentage2()}</div>
                    <p>*language data pulled directly from github API</p>
                  </div>
                </div>
              </div>

              {/* <!-- Column 2 --> */}
              <div className={styles.column2}>
                {/* <!-- Solution Content --> */}
                <div className={styles.sol}>
                  <h4>Project Purpose:</h4>
                  <p>{projectState.purpose}</p>
                </div>

                {/* <!-- Role Content --> */}
                <div className={styles.role}>
                  <h4>My Role:</h4>
                  <p>{projectState.role}</p>
                </div>

                {/* <!-- Notable Features Content --> */}
                <div className={styles.feat}>
                  <h4>Notable Features:</h4>
                  <ul>{this.notableFeatures()}</ul>
                </div>

                {/* <!-- Difficulties Content --> */}
                <div className={styles.diff}>
                  <h4>Future Work:</h4>
                  <p>{projectState.future}</p>
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
