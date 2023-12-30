import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <input className='input' onChange={props.onChange} ref={props.ref} type={ props.type } placeholder={ props.placeholder } defaultValue={ props.defaultValue } maxLength={8} />
  );
};

export default Input;