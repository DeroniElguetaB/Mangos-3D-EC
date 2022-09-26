import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Navbar from "../Nav-bar/Nav-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

    const {cart, removeItem, clear, cartTotal, cartSuma} = useContext(CartContext) 

    return (
        <div>
            <Navbar/>
            <Main/>
            <div className="Carrito">
                <h2> Carrito de compra</h2>
                <div className="container">
                    {cartTotal() > 0 ?
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td colSpan={"5"} className="text-end">
                                        <Link onClick={() => {clear()}}>
                                                <button type="button" className="remove btn fondo position-relative" title="Eliminar Producto">
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                        </Link>
                                    </td>
                                </tr>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-start"><img src={item.imagen} alt={item.nombre} title={item.nombre} width="120" /></td>
                                        <td className="text-start align-middle">{item.nombre}</td>
                                        <td className="text-end align-middle">{item.cantidad} x ${item.precio}</td>
                                        <td className="text-end align-middle">${item.cantidad * item.precio}</td>
                                        <td className="text-end align-middle">
                                            <Link onClick={() => {removeItem(item.id)}}> 
                                                <button type="button" className="remove btn fondo position-relative" title="Eliminar Producto">
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={3} className="text-end fw-bold">Total a Pagar</td>
                                    <td className="text-end fw-bold">${cartSuma()}</td>
                                    <td className="text-end">
                                        <Link to={"/checkout"} title="Finalizar Compra">
                                        <button type="button" className="carrito btn fondo position-relative" title="Finalizar Compra" value="Finalizar Compra" width="16">
                                            <FontAwesomeIcon icon={faCartShopping} />
                                        </button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    : <div className="alert alert-danger text-center" role="alert">No se encuentran productos en el carrito!</div>}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart