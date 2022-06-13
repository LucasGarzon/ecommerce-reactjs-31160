import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/appContext';
import BuyerDataEnter from './components/BuyerDataEnter';


function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={`/`} element={ <ItemListContainer greeting="Aquí se insertará el catálogo de productos"/> }></Route>
            <Route path={`/itemListContainer/:categoryId`} element={ <ItemListContainer/> }></Route>
            <Route path={`/itemDetail/:itemId`} element={ <ItemDetailContainer/> }></Route>
            <Route path={`/cart`} element={<Cart/>}></Route>
            <Route path={`/buyerData`} element={<BuyerDataEnter/>}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
