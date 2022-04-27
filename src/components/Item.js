import ItemCount from './ItemCount'
import ItemInfo from './ItemCount'

export const Item = ( {product} ) => {

	const {id, nombre, precio, imagen, stock, info} = product

  return (
		<>
			<div className="card p-1 m-1 col-12 col-md-4">
				<img src={imagen} className="card-img-top p-4 card__img m-auto"/>
				<div className="card-body">
					<h5 className="card-title">{nombre}</h5>
					<h6>Precio: ${precio}</h6>
					<ItemCount StockI={stock} Initial={0} />
				</div>
			</div>
		</>

  )
}

export default Item



