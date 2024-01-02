import { React, useContext } from 'react';
import { NavLink } from "react-router-dom";

// Components
import Card from '../components/Card/Card.jsx';
import Grid from '../components/Grid/Grid.jsx';
import Title from '../components/Title/Title.jsx';

// Context
import { Context } from '../App.jsx';

function Social() {
  const theme = useContext(Context);

  return (
    <>
      <Title className={theme[0] ? 'title-light' : 'title-dark'}>Social</Title>
      <Card>
        <Grid className="grid gr-3">
          <NavLink to="/" className={theme[0] ? 'link-light' : 'link-dark'}>Home</NavLink>
          <NavLink to="/About" className={theme[0] ? 'link-light' : 'link-dark'}>About</NavLink>
          <NavLink to="/Contact" className={theme[0] ? 'link-light' : 'link-dark'}>Contact</NavLink>
        </Grid>
      </Card>
    </>
  );
};

export default Social;