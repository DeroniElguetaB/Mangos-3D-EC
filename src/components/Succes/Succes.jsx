import React from "react";
import logotipo from '../../Assets/logotipo.png'

const Success = ({id}) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1>Compra realizada!</h1>
                <h3>Gracias por confiar en Mangos 3D, en brevedad nos comunicaremos con usted.</h3>
                <p><img className="logtipo" src={logotipo} alt="Logotipo" width={200}/></p>
                <p>El pedido de su compra se generó con el ID: <b>{id}</b></p>
            </div>
        </div>
    )
}

export default Success;