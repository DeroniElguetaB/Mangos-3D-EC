import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const {addItem} = useContext (CartContext)

    const onAdd = (counter) => {
        addItem(item, counter)
    }

    return (
        <div className="fluid-container cardetail text-white bg-dark card mb-3">
            <div class="row no-gutters">
                <div className="col-md-5">
                    <img className="itemsimagen" src={item.imagen} alt="imagedetail" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <h3>${item.precio}</h3>
                        <p className="card-text">{item.descripcion}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;