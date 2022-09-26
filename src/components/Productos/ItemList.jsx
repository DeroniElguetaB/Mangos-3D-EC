import Item from './Item'

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="columnas col-md-4 py-3">
                    <Item id={item.id} nombre={item.nombre} imagen={item.imagen} precio={item.precio} />
                </div>)
            )}
        </div>
    )
}

export default ItemList;