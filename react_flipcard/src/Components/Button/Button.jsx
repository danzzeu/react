import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="button" type={props.type}>{props.label}</button>
  );
};

export default Button;