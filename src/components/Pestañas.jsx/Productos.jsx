import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Nav-bar/Nav-bar";
import Main from '../Main/Main'
import ItemListContainer from "../Productos/ItemListContainer";

const Productos = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <ItemListContainer/>
            <Footer/>
        </div>
    )
}

export default Productos;