import React from 'react';
import { useState } from 'react';

// Links
import { Link } from 'react-router-dom';

// Components
import Card from '../../components/Card/Card.jsx';
import Input from '../../components/Input/Input.jsx';

const Home = () => {
  const [cep, setCep] = useState();

  const handleCep = (e) => {
    setCep(e.target.value);
  }

  return (
    <Card>
      <Input type='text' onChange={handleCep} placeholder='CEP'></Input>
      <Link className='link' to={'/cep/'+cep}>Buscar</Link>
    </Card>
  );
};

export default Home;