import React from 'react';
import './index.css';

const Card = (props) => (
  <div className="card">
    <div className="card__content">
      <div className="card__title">{props.title}</div>
      <div className="card__children">
        {props.children}
      </div>
    </div>
  </div>
);

export default Card;
