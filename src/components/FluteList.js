import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


function FluteList() {

  const [products, setProducts] = useState([])

	useEffect(() => {
		const db = getFirestore()

    const q = query(collection(db, "ItemCollection"), where("categoria", "==", "flautaNativa") )
		getDocs(q).then(snapshot => {
			setProducts(snapshot.docs.map((doc) => ( { id: doc.id, ...doc.data() } )))
		})
	}, [])
  

  return (
    <>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li key="allFlautas"><Link to={`/itemListContainer/${"flautaNativa"}`} className="dropdown-item">Todas</Link></li>
        {products.map(l => <li key={l.id}><Link to={`itemDetail/${l.id}`} className="dropdown-item">{l.nombre}</Link></li>)}
      </ul>        
    </>
  )
}
export default FluteList