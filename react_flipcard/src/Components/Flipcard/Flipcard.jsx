import React from 'react';
import { useState } from 'react';

// My Components
import './Flipcard.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

const Flipcard = () => {
  const [cep, setCep] = useState();
  const [data, setData] = useState([]);
  const [flip, setFlip] = useState(false);

  async function fetchData() {
    let url = 'https://viacep.com.br/ws/'+cep+'/json/';
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  const handleCep = (e) => {
    setCep(e.target.value);
  }

  const handleSubmit = (e) => {
    (e).preventDefault();
    fetchData();
    setFlip(true);
  }

  const handleBack = () => {
    setFlip(false);
    setData([]);
  }

  return (
    <div className={'flipcard ' + (flip ? 'active' : null)}>
      <div className='flipcard-inner'>
        <form onSubmit={handleSubmit} className="flipcard-front">
          <h1 className="flipcard-title">Buscar CEP</h1>
          <p className="flipcard-subtitle">Digite um cep válido abaixo para consultar todas as informações do endereço.</p>
          <Input type='text' onChange={handleCep} placeholder='CEP' defaultValue={cep ?? ''}></Input>
          <Button type="submit" label="Buscar" />
        </form>
        <div className='flipcard-back'>
          <h1 className="flipcard-title">Resultados</h1>
          <p className="flipcard-subtitle">Abaixo as informações do cep digitado anteriormente.</p>
          <div>
              <Input type='text' placeholder='Logradouro' defaultValue={data.logradouro ?? ''}></Input>
              <Input type='text' placeholder='Complemento' defaultValue={data.complemento ?? ''}></Input>
              <Input type='text' placeholder='Bairro' defaultValue={data.bairro ?? ''}></Input>
              <Input type='text' placeholder='Localidade' defaultValue={data.localidade ?? ''}></Input>
              <Input type='text' placeholder='Uf' defaultValue={data.uf ?? ''}></Input>
              <Input type='text' placeholder='Ibge' defaultValue={data.ibge ?? ''}></Input>
              <Input type='text' placeholder='Gia' defaultValue={data.gia ?? ''}></Input>
              <Input type='text' placeholder='ddd' defaultValue={data.ddd ?? ''}></Input>
              <Input type='text' placeholder='Siafi' defaultValue={data.siafi ?? ''}></Input>
          </div>
          <Button type="button" onClick={handleBack} label="Voltar" />
        </div>
      </div>
    </div>
  );
};

export default Flipcard;