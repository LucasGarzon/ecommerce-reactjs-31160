import ItemDetailContainer from './ItemDetailContainer'

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
				<div className="card-body">
					<h5 className="card-title">{nombre}</h5>
					<h6>Precio: ${precio}</h6>
					<ItemDetailContainer productos={product} productId={id}/>
				</div>
			</div>
		</>

  )
}

export default Item



