import React, { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial)
    const [itemStock, setItemStock] = useState(stock)
    const [color, setColor] = useState(false)

    const disminuirCantidad = (valor) => {
        if (valor > 0) {
        setCounter (valor)
        }
    }

    const AumentarCantidad = (valor) => { 
        if (valor <= itemStock) {
        setCounter (valor)
        }
    }

    const agregarItem = () => {
        if (counter <= itemStock) {
        onAdd(counter)
        setItemStock(itemStock - counter)
        setCounter(itemStock - counter)
        setColor(true)
        }
    }
    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
            <div>
                <div className="input-group">
                    <input type="button" className="btn btn-outline-warning" value="-" onClick= {() => {disminuirCantidad(counter -1)}} />
                    <input type="text" className="form-control" value={counter} onChange= {() => {}}/>
                    <input type="button" className="btn btn-outline-warning" value="+" onClick= {() => {AumentarCantidad(counter +1)}} />
                </div>
                <div className="d-grid gap-2 pt-3">
                    <input type="button" className="btn btn-outline-warning" value="Añadir al carrito" onClick={() =>{agregarItem()}} />
                </div>
            </div>
    )
}

export default ItemCount; 