import React from "react";
import logotipo from '../../Assets/logotipo.png'

const Loading = () => {
    return (
        <div className="row loading">
            <p><img className="logtipo" src={logotipo} alt="Logotipo" width={200}/></p>
            <h3> Cargando...</h3>
        </div>
    )

}

export default Loading