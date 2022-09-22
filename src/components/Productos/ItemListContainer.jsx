import React from "react";
import ItemList from './ItemList'
import { useEffect } from "react";
import { useState } from "react";
import { products } from '../Mock/Products'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {genero} = useParams ();

    useEffect(() => {
        let categoria = "";

        if (genero === "Maquinas"){
            categoria = "Maquinas";
        }
        else if (genero === "Mates"){
            categoria = "Mates";
        }
        else {
            categoria = "all";
        }

        const promesa = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        })
        promesa.then((resultado) => {
            if (categoria === "all"){
                setItems(resultado)
            }
            else {
                const array_productos = products.filter (producto => producto.categoria === categoria)
                setItems(array_productos)
            }
        })
    }, [genero])

    return (
        <div className="container-fluid ilcontainer">
            <h1>Nuestros productos</h1>
            <ItemList items = {items}/>
        </div>
    )
}

export default ItemListContainer;