import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";
import { useCartContext } from "./context/CartContext"

function Cart() {
  
  const { cart } = useCartContext()
  const { clear } = useCartContext()

  const [emptyCart, setEmptyCart] = useState()
  const [total, setTotal] = useState()
  const [orderId, setOrderId] = useState()

  useEffect(() => {
    cartState()
    sumaTotal()
  }, [cart])
  
  //Sumar Total
  function sumaTotal() {
    const sumAll = []
    cart.forEach(e => {
      sumAll.push(e.precio * e.quantity)
    });
    const sumWithInitial = sumAll.reduce(
      (previousValue, currentValuem, index) => previousValue + currentValuem,
      0
    );
    setTotal(sumWithInitial)
  }

  //Chequear si hay carrito
  function cartState() {
    if (!cart.length) {
      setEmptyCart(true)
    } else {
      setEmptyCart(false)
    }
  }

  return (
    <div className="container-fluid">
      {emptyCart ? (
        <div className="row d-flex flex-column flex-md-row justify-content-evenly">
          <h1 className="text-center m-auto p-4">El carrito está vacio</h1>
          <div className="row m-auto col-12 d-flex flex-column align-content-center">
            <Link className="btn btn-primary p-2 col-12 col-md-6 m-2" to={`/`}>Volver a la tienda</Link>
          </div>
        </div>
      ) :
      (
        <div className="row d-flex flex-column flex-md-row justify-content-evenly">
          {cart.map( p  => <CartDetail key={p.id} ProuctCart={p}/>)}
          <div className="row text-center m-auto p-4">
             <h2>Total:${total}</h2>
             <button className="btn btn-danger col-10 col-md-3 m-auto mt-4 p-2" onClick={() => clear()}>Borrar todo el carrito</button>
             <Link className="btn btn-primary col-10 col-md-3 m-auto mt-4 p-2" to={`/buyerData`}>Finalizar compra</Link>
          </div>
        </div>
      )}
		</div>
  )
}

export default Cart
