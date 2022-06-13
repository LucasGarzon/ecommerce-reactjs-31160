import { Link } from "react-router-dom"

export const Item = ( {product} ) => {

	const {id, nombre, precio, imagen} = product

  return (
		<>
			<div className="card p-1 m-1 col-12 col-md-4">
				<img src={imagen} className="card-img-top" alt="Foto del producto"/>
				<div className="card-body">
					<h5 className="card-title text-center">{nombre}</h5>
					<p className="card-text text-center">Precio: ${precio}</p>
					<div className="d-flex align-item-center justify-content-center">
						<Link className="btn btn-dark p-2" to={`/itemDetail/${id}`}>Ver más</Link>
					</div>
				</div>
			</div>
			
		</>

  )
}

export default Item



