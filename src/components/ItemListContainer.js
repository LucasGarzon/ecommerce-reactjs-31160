import ItemList from './ItemList'
import { useEffect, useState } from "react";
import { productsMasks } from "../data/productsData.js";

const ItemListContainer = ({greeting}) => {
  
  const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts()
	}, [])
	
	const getProducts = () => { 
		const getProductsPromise = new Promise((result, reject) => { 
			setTimeout(() => {
				result( productsMasks )	
			}, 2000);
		})

		getProductsPromise.then( data => {
			setProducts( data )
		}) 
	}

  return (
    <>
		 <>
      <div className="container-fluid bg-secondary">
          <h1 className="p-5 text-light text-center">{greeting}</h1>
          <ItemList items={products}/>   
      </div>  
		 </>
    </>
  )
}

export default ItemListContainer