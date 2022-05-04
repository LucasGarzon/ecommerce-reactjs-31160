import React, { useState } from "react";
import ItemCount from './ItemCount'

function ItemDetail({item}) {

  const {id, nombre, precio, imagen, stock, info} = item

  return (
    <>
      <div className="container">
        <h1 className="text-center p-4">{nombre}</h1>
        <div className="row m-auto col-12 col-md-6 col-lg-4">
          <img src={imagen} className="p-5 m-5 card__img m-auto"/>
        </div>
      </div>
      <h3 className="mb-3 text-center">Precio: ${precio}</h3>
      <h5 className="p-5 pb-0">Descripción:</h5>
      <p className="p-5 pt-0">{info}</p>
      <ItemCount StockI={stock} Initial={0}/>
    </>
  );
}

export default ItemDetail
