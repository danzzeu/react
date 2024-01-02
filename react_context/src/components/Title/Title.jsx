import React from 'react';

// Style 
import './Title.css';

const Title = ( {className, children} ) => {
  return (
    <>
      <h1 className={'title ' + className}>{children}</h1>
      <p className='subtitle'>Some text about the {children} page described here.</p>
    </>
  );
};

export default Title;