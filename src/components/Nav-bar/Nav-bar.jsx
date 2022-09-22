import React from "react"
import '../Nav-bar/navBar.css'
import '../LogoMangosIcono'
import LogoMangosIcono from "../LogoMangosIcono"
import { Link } from "react-router-dom"
import CartWidget from "../Cart/CartWidget"

const Navbar = () => {
    return (
        <div>
            {/* <nav className="navbar fixed-top navbar-expand-md navbar-dark">
            <!-- Brand -->
                <a className="navbar-brand" href="index.html">MANGOS<span>3D</span></a>
                <!-- Toggler/collapsibe Button -->
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <!-- Navbar links -->
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="compañia.html">COMPAÑÍA</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="misionvision.html">MISION/VISION</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="Productos.html">PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="pedidos.html">PEDIDOS</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <div className="container-fluid bg-black preNavbar">
                <ul className="row">
                    <li className="tituloMangos col-md-4">
                        <Link to={'/'}><h2>MANGOS 3D</h2></Link>
                    </li>
                    <li className="col-md-3 logoNavbar">
                        <LogoMangosIcono/>
                    </li>
                    <li className="sesion row col-md-5">
                        <p>
                            <Link>Crear cuenta</Link> | 
                            <Link> Iniciar sesion  </Link> 
                            <Link to={'/Cart'}>
                                    <CartWidget />
                            </Link>
                        </p>
                    </li>
                </ul>
            </div>
            <div className="container-fluid navBar">
                <div>
                    <ul className="row">
                        <li className="col-md-2">
                            <Link to={'/'}>INICIO</Link>
                        </li>
                        <li className="col-md-2">
                            <Link to={'/Compania'}>COMPAÑIA</Link>
                        </li>
                        <li className="col-md-2">
                            <Link to={'/Productos'}>PRODUCTOS</Link>
                        </li>
                        <li className="col-md-2">
                            <Link to={'/Productos/category/Maquinas'}>MAQUINAS BARBERSTYLE</Link>
                        </li>
                        <li className="col-md-2">
                            <Link to={'/Productos/category/Mates'}>MATES STYLE</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;