import React from 'react';
import './index.css';

const PrimaryButton = props => (
  <button
    className="button"
    onClick={props.onClick}
    {...props}
  >{props.text}</button>
)

export default PrimaryButton;
