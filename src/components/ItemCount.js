import { useState } from "react"

const Contador = ({StockI, Initial}) => {
    console.log('Aqui hay un render del componente contador');
    const [count, setCount] = useState(Initial)
    const [stock, setStock] = useState(StockI)

    const addHandler = () => { 
        if (stock > 0) {
            setCount(count + 1)
            setStock(stock - 1)
        }
    }
    const subHandler = () => { 
        if (count > 0) {
            setCount(count - 1)
            setStock(stock + 1)
        }
    }
    
    return (
        <>
          <div className="container d-flex flex-column justify-item-center">
             <div>Contador</div>
             <strong> Stock = {stock} </strong>
             <div className="col-2 m-auto">
                <button onClick={subHandler}>-</button>
                <strong> {count} </strong>
                <button onClick={addHandler}>+</button>
             </div>
          </div>
        </>
    )
}

export default Contador