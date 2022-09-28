import React from "react";
import ItemList from './ItemList'
import { useEffect } from "react";
import { useState } from "react";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const {id} = useParams ();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryItems = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            }
        });
    }, [id])

    return (
        <div className="container-fluid ilcontainer">
            <h1>Nuestros productos</h1>
            {loading ? <Loading /> : <ItemList items = {items}/>}
        </div>
    )
}

export default ItemListContainer;