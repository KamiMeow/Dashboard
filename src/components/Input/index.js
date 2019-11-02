import React from 'react';
import './index.css';

const Input = (props) => (
  <div className="input">
    <label className="input__label" htmlFor={props.id}>{props.label}</label>
    <div className="input__content">
      <input
        className="input__field"
        value={props.value}
        onChange={props.onChange}
        {...props}
      />

      <div className="input__icon">
        <span className="input__icon-content">{props.icon}</span>
      </div>
    </div>

    {/* <div className="strength-lines">
      <div className="line bg-red"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div> */}
  </div>
);

export default Input;
