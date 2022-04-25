import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'



function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer greeting="Aquí se insertará el catálogo de productos"/>
      <ItemCount StockI="5" Initial="0"/>
    </div>
  );
}

export default App;
