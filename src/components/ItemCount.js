import { useEffect, useState } from "react"

const Contador = ({StockI, Initial}) => {
    
    const [count, setCount] = useState(parseInt(Initial))
    const [stock, setStock] = useState(StockI)

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

    const onAdd = () => {
        console.log('onAdd...');  
    }

    return (
        <>
        	<div className="container p-4">
          	<h6 className="p-3 text-center">Stock: {StockI}</h6>
            <div className="col-2 m-auto d-flex m-auto justify-content-center">
              <button className="btn btn-light" onClick={subHandler}>-</button>
              <strong className="btn btn-light">{count}</strong>
              <button className="btn btn-light" onClick={addHandler}>+</button>
            </div>
            <div className="container p-4 d-flex m-auto justify-content-center">
              <button className="btn btn-light" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}

export default Contador