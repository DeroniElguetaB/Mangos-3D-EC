import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Nav-bar/Nav-bar";
import Main from '../Main/Main'
import ItemDetailContainer from "../Productos/ItemDetailContainer";

const ProductosDetalle = () => {
    return (
        <div className="detail">
            <Navbar/>
            <Main/>
            <ItemDetailContainer />
            <Footer/>
        </div>
    )
}

export default ProductosDetalle;