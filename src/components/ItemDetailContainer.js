import React, { useEffect, useState } from "react";
import { productsMasks } from "../data/productsData";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({productId}) {

  const [product, setProduct] = useState([])

	useEffect(() => {
		getItem()
	}, [])

	const getItem = () => { 

		const getItemPromise = new Promise((result, reject) => { 
			setTimeout(() => {
				result( productsMasks )	
			}, 2000);
		})

		getItemPromise.then( data => {
			let prod = {}
			data.forEach(e => {
				if (e.id == productId) {
					prod = e
				}
			});
			setProduct( prod )
		}) 
	}



  return (
    <>
      <ItemDetail item={product}/>
    </>
  );
}
export default ItemDetailContainer