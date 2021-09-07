import Item from './components/Item/Item';
import Card from './components/Card/Card';

const App = () => {
  return (
    <>
      <h3>Minha primeira aplicação com React</h3>
      <h5>Uma lista de items</h5>

      <Item text="texto 1" />
      <Item text="texto 2" />
      <Item text="texto 3" />
      <Card />
    </>
  );
};

export default App;
