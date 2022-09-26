import React, { useContext } from "react"
import { Link } from "react-router-dom"
import {CartContext} from "../Context/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    const {cartTotal, clear} = useContext(CartContext);

    return (
        <div className="iconos-cart">
            <button type="button" className="remove btn fondo position-relative" title="Vaciar Carrito" onClick={() => {clear()}}>
                    <FontAwesomeIcon icon={faTrash} />
            </button>
            <Link to={"/cart"}>
                <button type="button" className="carrito btn fondo position-relative" title="Ir al Carrito">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            </Link>
        </div>
        
    )
}

export default CartWidget;