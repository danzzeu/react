import React from 'react';
import './Container.css';

const Container = ({centered, children}) => {
    if (!centered) {
        return <div className="container">{children}</div>
    } else {
        return <div className="container container-center">{children}</div>
    }
};

export default Container;