import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemDetail from "../Productos/ItemDetail";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([]);
    const {id} = useParams ()

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb,"items",id);
        getDoc(queryDoc)
        .then((snapShot) => {
                setItem({id:snapShot.id, ...snapShot.data()});
                console.log({id:snapShot.id, ...snapShot.data()});
                setLoading(false);            
        });
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemDetail item = {item}/>}
        </div>
    )
}

export default ItemDetailContainer