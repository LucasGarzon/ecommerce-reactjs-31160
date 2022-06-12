// import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const {id, nombre, precio, imagen, stock, info} = item;

  const { isInCart } = useCartContext()

  return (
    <>
      <div className="container">
        <h1 className="text-center p-4">{nombre}</h1>
        <div className="row m-auto col-12 col-md-6 col-lg-4">
          <img src={imagen} className="p-5 m-5 card__img m-auto" alt="Imagen del producto"/>
        </div>
      </div>
      <h3 className="mb-3 text-center">Precio: ${precio}</h3>
      <h5 className="p-5 pb-0">Descripción:</h5>
      <p className="p-5 pt-0">{info}</p>
      {!isInCart(id) ? (
          <ItemCount StockI={stock} id={id}/>
      ) : (
        <div className="container p-4 d-flex flex-column m-auto justify-content-center">
        <Link to={`/`} className="btn btn-primary col-10 col-md-3 m-auto mt-4 p-2">
          Volver a la tienda
        </Link>
        <Link to={`/cart`} className="btn btn-warning col-10 col-md-3 m-auto mt-4 p-2">
          Terminar compra
        </Link>
      </div>
      )}
    </>
  );
}

export default ItemDetail;
