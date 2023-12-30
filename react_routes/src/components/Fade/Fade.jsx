import React from 'react';

// Css
import './Fade.css';

const Fade = ({children}) => {
  return (
    <div className='fade'>{children}</div>
  );
};

export default Fade;