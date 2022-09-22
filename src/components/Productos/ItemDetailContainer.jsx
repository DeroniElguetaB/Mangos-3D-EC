import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Mock/Products";
import ItemDetail from "../Productos/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams ()

    useEffect(() => {
    const promesa = new Promise ((resolve, reject) => {
    const producto = products.find((prod) => prod.id === id)
        setTimeout(() => {
                resolve(producto);
        }, 2000)
    })
        promesa.then((resultado) => {
            setItem(resultado)
            console.log(resultado)
        })
    }, [id])

    return (
        <div className="container">
            <ItemDetail item = {item}/>
        </div>
    )
}

export default ItemDetailContainer