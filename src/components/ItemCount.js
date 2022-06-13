import {useState } from "react"
import { useAppContext } from "./context/appContext"
import { useCartContext } from "./context/CartContext"

const Contador = ({StockI, id}) => {
    
    const [count, setCount] = useState(parseInt(0))

    const { addToCart } = useCartContext()
    const { products } = useAppContext()

    const addHandler = () => { 
        if (StockI > count) {
            setCount(count + 1)
        }
    }
    const subHandler = () => { 
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const handleClick = (id, cantidad) => {
      const findProduct = products.find((producto) => producto.id === id)

      if (!findProduct) {
          alert("Error en la base de datos")
          return
      }
      addToCart(findProduct, cantidad)
    //   onAdd(count)
    }

    return (
        <>
        	<div className="container p-4">
          	<h6 className="p-3 text-center">Stock: {StockI}</h6>
            <div className="col-2 m-auto d-flex m-auto justify-content-center">
              <button className="btn btn-dark" onClick={subHandler}>-</button>
              <strong className="btn btn-light col-12 col-md-5">{count}</strong>
              <button className="btn btn-dark" onClick={addHandler}>+</button>
            </div>
            <div className="container p-4 d-flex m-auto justify-content-center">
              <button className="btn btn-dark" onClick={() => handleClick(id, count)}>Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}

export default Contador