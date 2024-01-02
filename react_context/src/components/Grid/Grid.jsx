import { Children } from 'react';

// Style 
import './Grid.css';

const Grid = ( {className,  children } ) => {
  return (
    <div className={className}>
      {Children.map(children, child =>
        <div className="column">
          {child}
        </div>
      )}
    </div>
  );
};

export default Grid;