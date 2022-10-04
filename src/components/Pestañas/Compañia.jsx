import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Nav-bar/Nav-bar";
import Main from '../Main/Main'

const Compania = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <h1 style ={{color: "black"}}>Nuestra Compania</h1>
            <Footer/>
        </div>
    )
}

export default Compania;