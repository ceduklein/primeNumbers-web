import React, {useState} from 'react';

import './styles.css';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';

const Home = () => {
  const [resultVisible, setResultVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);

  const onSearchPrimeNumbers = () => {
    setResultVisible(true);

  }

  const onSearchHistory = () => {
    setHistoryVisible(true);
  }

  return (
    <div className="jumbotron container">
      <h1 className="display-3">Olá! Seja bem vindo!</h1>
      <p className="lead">
        Gostaria de saber quais são os números primos de um determinado intervalo?
      </p>
      <hr className="my-4" />

      <Card title="Informe o intervalo">
        <div className="row">
          <div className="col-md-5">
            <FormGroup htmlFor="inputN1" label="Primeiro Número:">
              <input type="text" className="form-control" id="inputN1"/>           
            </FormGroup>
          </div>

          <div className="col-md-5">
            <FormGroup htmlFor="inputN2" label="Segundo Número:">
              <input type="text" className="form-control" id="inputN2"/>
            </FormGroup>
          </div>

          <div className="col-md-2" >
            <input 
              className="btn btn-primary searchButton" 
              type="button"
              value="Consultar" 
              onClick={onSearchPrimeNumbers} />
          </div>
        </div>
      </Card>

      {
        resultVisible ? 
          <Card title="Resultado">

          </Card>
        :
          <div />
      }

      <button
        onClick={onSearchHistory} 
        className="btn btn-link historyLink">
          Verificar histórico de números consultados.
      </button>

      {
        historyVisible ?
          <Card title="Histórico de consultas">
            
          </Card>
        :
          <div />
      }

    </div>
    
  );
};

export default Home;