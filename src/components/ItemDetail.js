import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const {id, nombre, precio, imagen, stock, info} = item;

  const [sendCart, setSendCart] = useState(false);

  const onAdd = (count) => {
    setSendCart(true);
  };

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
      {sendCart ? (
        <div className="container p-4 d-flex m-auto justify-content-center">
          <Link to={`/cart`} className="btn btn-warning p-4 mb-2">
            Terminar compra
          </Link>
        </div>
      ) : (
        <ItemCount StockI={stock} onAdd={onAdd} id={id}/>
      )}
    </>
  );
}

export default ItemDetail;
