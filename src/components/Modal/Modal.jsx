import React, { Component } from 'react';
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class Modal extends Component {
  render() {
    return (
  <div className='modal-content-wrapper'>
    <div className="modal-content">
    {/* <!-- Modal Content on Project --> */}
      <article className="text-justify">
    
      {/* <!-- Column-1 --> */}
        <div id="column-1">
    
          {/* <!-- Summary Section --> */}
          <div id="summary">
            <h3>${project.name}</h3>
            <div className='image-section'>
              <a href="${project.live}">
              <img src="${project.image}" alt="${project.name}" className="image">
              </a>
            </div>
            <div className="buttons">
              <a className="btn" href="${project.live}" target="_blank">
                <i className="fas fa-desktop"></i>
                <p>Live Preview</p>
              </a>
              <a className="btn" href="${project.github}" target="_blank">
                <i className="fas fa-code-branch"></i>
                <p>Source Private</p>
              </a>
            </div>
            <p>
            ${project.overview}
            </p>
          </div>
    
          {/* <!-- Technology Section --> */}
          <div id="tech">
            <h4>Technologies Used</h4>
            <div className="table">
              <ul className="fa-ul">
                ${project.technology.join('')}
              </ul>
              </div>
              <div className='lang-percent'> 
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
              </div>
          </div>
        </div>
    
        {/* <!-- Column 2 --> */}
        <div id="column-2">
    
          {/* <!-- Role Content --> */}
          <div id="role">
            <h4>My Role</h4>
            <p>
            ${project.role}
            </p>
          </div>
    
          {/* <!-- Difficulties Content --> */}
          <div id="diff">
            <h4>Project Difficulties</h4>
            <p>
            ${project.difficult}
            </p>
          </div>
    
          {/* <!-- Solution Content --> */}
          <div id="sol">
            <h4>My Solution</h4>
            <p>
            ${project.solution}
            </p>
          </div>
    
          {/* <!-- Notable Features Content --> */}
          <div id="feat">
            <h4>Notable Features</h4>
            <ul>
            ${project.features.join('')}
            </ul>
          </div>
        </div>
      </article>
      </div>
    </div>)

  }
}

export default Modal;
