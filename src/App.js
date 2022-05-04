import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={`/`} element={ <ItemListContainer greeting="Aquí se insertará el catálogo de productos"/> }></Route>
        <Route path={`/itemDetail/:itemId`} element={ <ItemDetailContainer/> }></Route>
        {/* <Route path='/item/:id' element={ <ItemDetailContainer productos={product} productId={id}/> }></Route> */}
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
