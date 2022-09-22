import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Main/main.css';
import ItemDetailContainer from "../Productos/ItemDetailContainer";
import ItemListContainer from "../Productos/ItemListContainer";

class Main extends Component {
    render () {
        return (
            <div className="container-fluid banner-image">
                <div className="jumbotron-fluid d-block justify-content-center" id="transicion1">
                    <h1 className="display-4">Somos MANGOS 3D</h1>
                    <p className="lead">Servicio de impresiones y diseños</p>
                    {/* <Link className="btn btn-warning btn-lg" href="#1" role="button">Leer más</Link> */}
                </div>
                <div className="contenedor1 col">
                    <div className="LOGO" id="LOGO"></div>
                </div>
        </div>
        )
    }
}

export default Main;