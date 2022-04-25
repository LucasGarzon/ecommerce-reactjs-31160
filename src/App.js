import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer greeting="Aquí se insertará el catálogo de productos"/>
    </div>
  );
}

export default App;
