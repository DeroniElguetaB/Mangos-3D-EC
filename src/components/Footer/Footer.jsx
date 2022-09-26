import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render () {
        return (
        //     <div class="container-fluid-footer">
        //     <div class="contacto">
        //         <h4>Contacto</h4>
        //     </div>
        //     <div class="icono">
        //         <a href="https://www.facebook.com/ClipperTops" target="_blank"><i class="iconos fa-brands fa-facebook"></i></a>
        //         <a href="https://api.whatsapp.com/send?phone=++5492612596584&text=Hola%20equipo%20de%20Mangos%203D!%20Quisiera%20contactarme%20con%20ustedes." target="_blank"><i class="iconos fa-brands fa-whatsapp"></i></a>
        //         <a href="https://www.instagram.com/3dmangos/" target="_blank"><i class="iconos fa-brands fa-instagram"></i></a>
        //     </div>
        //     <div class="copyright">
        //         <p class="lead">Todos los derechos reservados por copyright</p>
        //     </div>
        // </div>
            <div className="container-fluid bg-black footer">
                <div className="row">
                    <section className="col-md-4">
                        <h2>Contactenos</h2>
                        <p>Lunes a viernes de 9 a 20 hs/ Sabados de 9 a 13 hs</p>
                        <ul>
                            <li>whatsapp</li>
                            <li>email</li>
                            <li>ubicacion</li>
                        </ul>
                    </section>
                    <section className="col-md-4">
                        <h2>Ayuda</h2>
                        <ul>
                            <li>Preguntas Frecuentes</li>
                            <li>Como comprar</li>
                            <li>Envios</li>
                            <li>Cambios o devoluciones</li>
                        </ul>
                    </section>
                    <section className="col-md-4 redesSociales">
                        <h2>Redes Sociales</h2>
                            <ul>
                                <li>
                                    <Link to={"https://www.facebook.com/ClipperTops"}>Facebook</Link>
                                </li>
                                <li>
                                    <Link to={"https://www.instagram.com/3dmangos/"}>Instagram</Link>
                                </li>
                            </ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default Footer;