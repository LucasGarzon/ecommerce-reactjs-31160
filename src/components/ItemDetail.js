import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import ItemCount from './ItemCount'

function ItemDetail({item}) {

  const {id, nombre, precio, imagen, stock, info} = item

  //Modal
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2 bg-secondary" onClick={() => handleShow(v)}>
          Ver más
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row m-auto col-12 col-md-6 col-lg-4">
              <img src={imagen} className="p-5 m-5 card__img m-auto"/>
            </div>
          </div>
          <h3 className="mb-3 text-center">Precio: ${precio}</h3>
          <h5 className="p-5 pb-0">Descripción:</h5>
          <p className="p-5 pt-0">{info}</p>
          <ItemCount StockI={stock} Initial={0} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemDetail
