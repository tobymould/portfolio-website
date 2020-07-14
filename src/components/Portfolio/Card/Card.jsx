import React, { Component } from 'react';
import styles from './Card.module.scss';

export class Card extends Component {
  render() {
    // const { name } = this.props;
    return (
      <div>
        <button className="item" value="${index}">
          <h4>{this.props.object.name}</h4>
          <p>Is this working?</p>
        </button>
      </div>
    );
  }
}

export default Card;
