import React, { Component } from 'react';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Modal extends Component {
  render() {
    return (
      <section className={styles.modalContentWrapper}>
        <div className={styles.modalContent}>
          {/* <!-- Modal Content on Project --> */}
          <article>
            {/* <!-- Column-1 --> */}
            <div className={styles.column1}>
              {/* <!-- Summary Section --> */}
              <div className={styles.summary}>
                <h3>${project.name}</h3>
                <div className={styles.imageSection}>
                  <a href="${project.live}">
                    <img src="${project.image}" alt="${project.name}" className={styles.image}></a>
                  </div>
                  <div className={styles.buttons}>
                    <a href="${project.live}" target="_blank">
                      <FontAwesomeIcon icon={['fas', 'desktop']} />
                      <p>Live Preview</p>
                    </a>
                    <a href="${project.github}" target="_blank">
                      <FontAwesomeIcon icon={['fas', 'code-branch']} />
                      <p>Source Private</p>
                    </a>
                  </div>
                  <p>${project.overview}</p>
                </div>

                {/* <!-- Technology Section --> */}
                <div className={styles.tech}>
                  <h4>Technologies Used</h4>
                  <div className={styles.table}>
                    <ul className={styles.fa - ul}>${project.technology.join('')}</ul>
                  </div>
                  <div className={styles.langPercent}>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Column 2 --> */}
            <div className={styles.column2}>
              {/* <!-- Role Content --> */}
              <div className={styles.role}>
                <h4>My Role</h4>
                <p>${project.role}</p>
              </div>

              {/* <!-- Difficulties Content --> */}
              <div className={styles.diff}>
                <h4>Project Difficulties</h4>
                <p>${project.difficult}</p>
              </div>

              {/* <!-- Solution Content --> */}
              <div className={styles.sol}>
                <h4>My Solution</h4>
                <p>${project.solution}</p>
              </div>

              {/* <!-- Notable Features Content --> */}
              <div className={styles.feat}>
                <h4>Notable Features</h4>
                <ul>${project.features.join('')}</ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default Modal;
