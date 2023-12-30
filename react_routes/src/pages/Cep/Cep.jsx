import React from 'react';
import { useState, useEffect } from 'react';

// Links/ Params
import { Link, useParams } from 'react-router-dom';

// Components
import Card from '../../components/Card/Card.jsx';
import Label from '../../components/Label/Label.jsx';

const Search = () => {
  const [data, setData] = useState([]);
  const {id} = useParams();

  async function fetchData() {
    let url = 'https://viacep.com.br/ws/'+id+'/json/';
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <Card className="card-grid">
        <Label name="Logradouro" data={data.logradouro ?? 'Não encontrado'} />
        <Label name="Bairro" data={data.bairro ?? 'Não encontrado'} />
        <Label name="Localidade" data={data.localidade ?? 'Não encontrado'} />
        <Label name="UF" data={data.uf ?? 'Não encontrado'} />
        <Label name="Ibge" data={data.ibge ?? 'Não encontrado'} />
        <Label name="ddd" data={data.ddd ?? 'Não encontrado'} />
        <Label name="Siafi" data={data.siafi ?? 'Não encontrado'} />
      </Card>
      <br />
      <Link className='link' to="/"><i className="bi bi-arrow-left"></i></Link>
    </div>
  );
};

export default Search;