import Item from "./Item.js";

const ItemList = ({items}) => {
	
  return (
    <div className="container p-4">
			<div className="row d-flex flex-column flex-md-row justify-content-evenly">
				{items.map( p  => <Item key={p.id} product={p}/>)}
			</div>
		</div>
  )
}

export default ItemList


