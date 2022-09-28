import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, imagen, nombre, precio}) => {   
    return (
        <div className="Item col-md-4">
                <div className="card carditem border-warning text-white bg-dark mb-3 col-md-4" key={id}>
                    <Link to={'/Productos/item/' + id}><img src={imagen} className="card-img-top" height={300}></img></Link>
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <strong><h6>${precio}</h6></strong>
                        <Link to={'/Productos/item/' + id} className="Vermas btn btn-outline-warning">Ver mas detalles</Link>
                    </div>
                </div>
        </div>
    )
}

export default Item;