import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Nav-bar/Nav-bar";
import Main from '../Main/Main'

const Inicio = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <h1 style ={{color: "black"}}>Inicio</h1>
            <Footer/>
        </div>
    )
}

export default Inicio;