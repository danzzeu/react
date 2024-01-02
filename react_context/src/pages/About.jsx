import { React, useContext } from 'react';
import { NavLink } from "react-router-dom";

// Components
import Card from '../components/Card/Card.jsx';
import Grid from '../components/Grid/Grid.jsx';
import Title from '../components/Title/Title.jsx';

// Context
import { Context } from '../App.jsx';

const About = () => {
  const theme = useContext(Context);

  return (
    <>
      <Title className={theme[0] ? 'title-light' : 'title-dark'}>About</Title>
      <Card>
        <Grid className="grid gr-3">
          <NavLink to="/" className={theme[0] ? 'link-light' : 'link-dark'}>Home</NavLink>
          <NavLink to="/Contact" className={theme[0] ? 'link-light' : 'link-dark'}>Contact</NavLink>
          <NavLink to="/Social" className={theme[0] ? 'link-light' : 'link-dark'}>Social</NavLink>
        </Grid>
      </Card>
    </>
  );
};

export default About;