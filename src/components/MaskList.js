import { Link } from "react-router-dom";
import { productsMasks } from "../data/productsData";

function MaskList() {
  
  const list= productsMasks

  return (
    <>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {list.map(l => <li key={l.id}><Link to={`itemDetail/${l.id}`} className="dropdown-item">{l.nombre}</Link></li>)}
      </ul>        
    </>
  )
}

export default MaskList
