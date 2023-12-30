import React from 'react'

import './Label.css';

const Label = ({name, data}) => {
  return (
    <label className="label">
        <span>{name}</span>
        <p>{data}</p>
    </label>
  );
};

export default Label;