import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsMasks } from "../data/productsData";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {

	const { itemId } = useParams()

  const [product, setProduct] = useState({})

	useEffect(() => {
		getItem()
	}, [itemId])

	const getItem = () => { 

		const getItemPromise = new Promise((result, reject) => { 
			setTimeout(() => {
				result( productsMasks )	
			}, 2000);
		})

		getItemPromise.then( data => {
		setProduct(data.find( d => d.id == itemId ))
		})
	}
	
  return (
    <>
      <ItemDetail item={product}/>
    </>
  );
}
export default ItemDetailContainer