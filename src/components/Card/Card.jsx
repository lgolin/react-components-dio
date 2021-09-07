// state é uma memória temporária.
// O state serve para criarmos components, funções, efeitos dinâmicos, animações, etc.
import { useState } from 'react';
import Button from '../Button/Button';

const Card = () => {
  // o useState traz um array de variável e uma função
  const [value, setValue] = useState(0); // 0 porque nosso contator se inicia no número 0.

  function Adicionar() {
    setValue(value + 1);
  }

  function Remover() {
    setValue(value - 1);
  }

  return (
    <div className="card-body">
      <h5 className="card-title">Contador</h5>
      <p className="card-text">Clique nos botões abaixo para interagir com o contador</p>
      <Button className="btn btn-success" onClick={Adicionar}>
        Adicionar
      </Button>
      <Button className="btn btn-danger" onClick={Remover}>
        Remover
      </Button>
      <p>{value}</p>
    </div>
  );
};

export default Card;
