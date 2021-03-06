import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";
import { useCartContext } from "./context/CartContext"

function Cart() {
  
  const { cart } = useCartContext()
  const { clear } = useCartContext()

  const [emptyCart, setEmptyCart] = useState()
  const [total, setTotal] = useState()

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
        <div className="row d-flex flex-column align-items-center justify-content-center emptyCart_container">
          <h1 className="text-center m-0">El carrito está vacio</h1>
          <div className="row m-0 col-12 d-flex flex-column align-content-center">
            <Link className="btn btn-dark p-2 col-12 col-md-6 m-2" to={`/`}>Volver a la tienda</Link>
          </div>
        </div>
      ) :
      (
        <div className="row d-flex flex-column flex-md-row justify-content-evenly">
          {cart.map( p  => <CartDetail key={p.id} ProuctCart={p}/>)}
          <div className="container border">
            <div className="row d-flex flex-column text-center m-auto p-4">
              <h2>Total:${total}</h2>
              <button className="btn btn-secondary col-10 col-md-3 m-auto mt-4 p-2" onClick={() => clear()}>Borrar todo el carrito</button>
              <Link className="btn btn-dark col-10 col-md-3 m-auto mt-4 p-2" to={`/buyerData`}>Finalizar compra</Link>
            </div>
          </div>
        </div>
      )}
		</div>
  )
}

export default Cart
