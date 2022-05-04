import { Link } from "react-router-dom"

export const Item = ( {product} ) => {

	const {id, nombre, precio, imagen, stock, info} = product

  return (
		<>
			<div className="card p-1 m-1 col-12 col-md-4">
				<div className="container">
          <div className="row m-auto col-12">
            <img src={imagen} className="p-5 m-5 card__img m-auto"/>
          </div>
        </div>
				<div className="card-body text-center p-3">
					<h5 className="card-title p-3">{nombre}</h5>
					<h6 className="p-2">Precio: ${precio}</h6>
					<Link className="btn btn-primary p-2" to={`/itemDetail/${id}`}>Ver más</Link>
				</div>
			</div>
		</>

  )
}

export default Item



