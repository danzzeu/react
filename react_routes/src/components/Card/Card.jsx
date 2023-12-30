import React from 'react';

// Css
import './Card.css';

const Card = ({className, children}) => {
  return (
    <div className={'card ' + (className ? 'card-grid' : '')}>
        {children}
    </div>
  );
};

export default Card;