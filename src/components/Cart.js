import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";
import { useCartContext } from "./context/CartContext"

function Cart() {
  
  const { cart } = useCartContext()
  const { total } = useCartContext()
  const { clear } = useCartContext()

  const [emptyCart, setEmptyCart] = useState()
  
  useEffect(() => {
    cartState()
  }, [cart])

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
          </div>
        </div>
      )}
		</div>
  )
}

export default Cart
