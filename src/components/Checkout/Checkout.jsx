import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from '../Context/Context'
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Navbar from "../Nav-bar/Nav-bar";
import Succes from '../Succes/Succes';
import { getFirestore, collection ,addDoc } from "firebase/firestore";  

const Checkout = () => {

    const {cart, clear, cartTotal, cartSuma} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [pedidoId, setPedidoId] = useState("");

    const sendPedido = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            const buyer = {nombre:nombre, email:email, telefono:telefono};
            const items = [];
            cart.forEach(item => {
                items.push({id:item.id, nombre:item.nombre, precio:item.precio, cantidad:item.cantidad});
            });
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            const pedido = {buyer:buyer, items:items, date:now, total:cartSuma()};
            
            const db = getFirestore();
            const coleccionDePedidos =  collection(db, "pedidos");
            addDoc(coleccionDePedidos, pedido).then(({id}) => {
                setPedidoId(id);
                clear();
            });
        }
    }

    return (
        <div>
            <Navbar />
            <Main />
            <div className="pedido">
                <div className="container">
                    <h2>Pedido</h2>
                    <hr/>
                        {cartTotal() > 0 ?
                            <div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan={"5"} className="text-end">
                                            </td>
                                        </tr>
                                        {cart.map(item => (
                                            <tr key={item.id}>
                                                <td className="text-start"><img src={item.imagen} alt={item.nombre} title={item.nombre} width="120" /></td>
                                                <td className="text-start align-middle">{item.nombre}</td>
                                                <td className="text-end align-middle">{item.cantidad} x ${item.precio}</td>
                                                <td className="text-end align-middle">${item.cantidad * item.precio}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={3} className="text-end fw-bold">Total a Pagar</td>
                                            <td className="text-end fw-bold">${cartSuma()}</td>
                                        </tr>
                                    </tbody>
                                    <br/>
                                </table>
                                <h2>Formulario de pedido</h2>
                                    <hr />
                                    <div className="formbuyer">
                                        <div className="col-md-12">
                                            <label form="nombre" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)}/>
                                        </div>
                                        <div>
                                            <label form="email" className="form-label">Email</label>
                                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div>
                                            <label form="telefono" className="form-label">Teléfono</label>
                                            <input type="number" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)}/>
                                        </div>
                                        <br />
                                        <button type="button" className="btn btn-outline-warning btn-succes" onClick={() => {sendPedido()}}>Generar pedido</button>
                                    </div>
                                    <br />
                            </div>
                        : pedidoId !== "" ? <Succes id={pedidoId} /> : <div className="alert alert-danger text-center" role="alert">No se han encontrado productos seleccionados en su orden de compra</div>}
                    </div>
                </div>
            <Footer />
        </div>
    )
} 

export default Checkout;