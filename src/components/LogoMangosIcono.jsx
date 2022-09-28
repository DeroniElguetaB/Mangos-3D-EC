import React, { Component } from "react";
import logoMangos from '../Assets/logotipo.png'

class LogoMangosIcono extends Component {
    render () {
        return(
            <div>
                <img className='logoMangos' src={logoMangos} alt="logotipo"/>
            </div>
        )
    }
}

export default LogoMangosIcono;