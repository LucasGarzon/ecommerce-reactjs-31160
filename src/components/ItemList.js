import { useEffect, useState } from "react";
import { productsMasks } from "../data/productsData.js";
import Item from "./Item.js";

const ItemList = () => {

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
    <div className="container-fluid">
			<div className="row d-flex flex-column flex-md-row justify-content-evenly">
				{products.map( p  => <Item key={p.id} product={p}/>)}
			</div>
		</div>
  )
}

export default ItemList


