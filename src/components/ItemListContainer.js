import ItemList from './ItemList'
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, where, query} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Header from './Header';


const ItemListContainer = ({greeting}) => {

  const { categoryId } = useParams();
  
  const [products, setProducts] = useState([])

	useEffect(() => {
		const db = getFirestore()

		const itemCollection = collection(db, "ItemCollection")

    if (categoryId) {
      const q = query(collection(db, "ItemCollection"), where("categoria", "==", categoryId) )
      getDocs(q).then(snapshot => {
        setProducts(snapshot.docs.map((doc) => ( { id: doc.id, ...doc.data() } )))
      })
    } else {
      getDocs(itemCollection).then(snapshot => {
        setProducts(snapshot.docs.map((doc) => ( { id: doc.id, ...doc.data() } )))
      })
    }
	}, [categoryId])

	
  return (
    <>
		 <>
      <div className="container-fluid p-0 main__container">
          <Header/>
          <ItemList items={products}/>   
      </div>  
		 </>
    </>
  )
}

export default ItemListContainer