import React from 'react';
import './index.css';

const Container = (props) => (
  <div className="container">
    <div className={currentClass(props)}>
      {props.children}
    </div>
  </div>
);

const currentClass = props => {
  const classes = ['container__content'];

  if (props.justify) {
    classes.push('justify-' + props.justify);
  }
  if (props.align) {
    classes.push('align-' + props.align);
  }
  return classes.join(' ');
}

export default Container;
