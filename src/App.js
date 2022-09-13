import './App.css';
import Product from './Product';

function App() {
  return (
    <div>
      <Product name={'Echo'} description='Your AI assistant' price={59.99} />
      <Product
        name={'IPhone'}
        description='Your favorite IPhone'
        price={1099}
      />
      <Product name={'Laptop'} description='Your home' price={800} />
    </div>
  );
}

export default App;
