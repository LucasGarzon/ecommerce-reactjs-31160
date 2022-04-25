import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
      <>
        <div className="container-fluid bg-secondary">
            <h1 className="p-5 text-light">{greeting}</h1>   
            <ItemCount StockI="5" Initial="0"/>       
        </div>  
      </>
    )
}

export default ItemListContainer