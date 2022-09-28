import React from "react"
import '../LogoMangosIcono'
import LogoMangosIcono from "../LogoMangosIcono"
import { Link } from "react-router-dom"
import CartWidget from "../Cart/CartWidget"

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid bg-black preNavbar">
                <ul className="row">
                    <li className="tituloMangos col-md-5">
                        <Link to={'/'}><h2>MANGOS 3D</h2></Link>
                    </li>
                    <li className="col-md-5 logoNavbar">
                        <LogoMangosIcono/>
                    </li>
                    <li className="sesion row col-md-2">
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