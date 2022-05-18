import { Link } from "react-router-dom";
import { useAppContext } from "./context/appContext"
import { useCartContext } from "./context/CartContext"

function CartDetail( {ProuctCart} ) {

  const { removeItem } = useCartContext()
  const { cart } = useCartContext()

  const {id, nombre, precio, imagen, quantity} = ProuctCart

  const subItemClick = (id) => {
    const findProduct = cart.find((producto) => producto.id === id)

    if (!findProduct) {
        alert("Error en la base de datos")
        return
    }
    removeItem(findProduct)
  }

  return (
		<>
			<div className="card p-1 m-auto mt-2 mb-2 col-11 col-md-6 col-lg-4">
				<div className="container">
          <div className="row m-auto col-12">
            <img src={imagen} className="p-5 m-5 card__img m-auto"/>
          </div>
        </div>
				<div className="card-body text-center p-3">
					<h5 className="card-title p-3">{nombre}</h5>
					<h6 className="p-1">Cantidad: {quantity}</h6>
          <h6 className="p-1">Precio: ${precio}</h6>
          <div className="row m-auto col-12 d-flex flex-column align-content-center">
            <Link className="btn btn-primary p-2 col-12 col-md-6 m-2" to={`/itemDetail/${id}`}>Agregar más</Link>
            <button className="btn btn-danger col-12 col-md-6 m-2" onClick={() => subItemClick(id)}>Eliminar item</button>
          </div>
				</div>
			</div>
		</>
  )
}
export default CartDetail