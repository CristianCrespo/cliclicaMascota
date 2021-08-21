import React from "react";
import {Link} from 'react-router-dom';
import logo from "../componentes/imagenes/logo-cuadrado.jpg";

class Header extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col py-5 text-lefth">
                    <h2> Clinica de Mascotas </h2>
                    <hr></hr>
                    <div className="col-md-12">
                        <Link to='/' ><strong>Inicio</strong></Link>
                        <Link to='/listaPropietarios'><strong> | Lista de Propietarios </strong></Link>
                        <Link to='/AddMascota'><strong>| Agregar Mascota</strong></Link>
                    </div>
                    <hr></hr>
                </div>
                <div className="col-2 py-5 text-rigth ">
                    <img src={logo}></img>
                </div>
            </div>
        )
    }
}
export default Header;