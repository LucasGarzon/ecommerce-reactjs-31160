import { useState } from "react"

const Contador = ({StockI, Initial}) => {
    const [count, setCount] = useState(parseInt(Initial))
    const [stock, setStock] = useState(StockI)
    const addHandler = () => { 
        if (stock > count) {
            setCount(count + 1)
        }
    }
    const subHandler = () => { 
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const sendCart = () => {
        setStock(stock - count)
        setCount(parseInt(Initial))
    }

    return (
        <>
          <div className="container-fluid m-0 d-flex flex-column justify-item-center bg-secondary p-4">
             <div>Contador</div>
             <strong className="p-4 text-light"> Stock = {stock} </strong>
             <div className="col-2 m-auto d-flex m-auto justify-content-center">
                <button className="btn btn-light" onClick={subHandler}>-</button>
                <strong className="btn btn-light">{count}</strong>
                <button className="btn btn-light" onClick={addHandler}>+</button>
             </div>
             <div className="container p-4 d-flex m-auto justify-content-center">
                <button className="btn btn-light col-2 p-2" onClick={sendCart}>Agregar al carrito</button>
             </div>
          </div>
        </>
    )
}

export default Contador