import React from "react";
import ListaItem from "../componentes/ListaItem";
import PropietariosForm from "../componentes/PropietariosForm";

class Lpropietarios extends React.Component{

    handleSubmit= evento =>{
        evento.preventDefault();
        let usuario = {
            nombre: evento.target.nombre.value,
            direccion: evento.target.direccion.value,
            telefono: evento.target.telefono.value
        }
        console.log(usuario);
    }
    render(){
        return(
            <div className="col-12 border">
                <h4 className="text-center py-1">Lista de Propietarios</h4>
                <hr></hr>
                <div className="row">
                    <div className="col-9 py-3">
                        <div className="row">
                            <div className="col-1">
                                <strong>#ID</strong>
                            </div>
                            <div className="col-3">
                                <strong>Nombre</strong>
                            </div>
                            <div className="col-3 col-md-4">
                                <strong>Dirección</strong>
                            </div>
                            <div className="col-2">
                                <strong>Teléfono</strong>
                            </div>
                            <div className="col-2">
                                <strong>#Opciones</strong>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <ListaItem/>
                        </div>
                    </div>

                     <div className="col-3 py-4">
                            <PropietariosForm onSubmit={this.handleSubmit}/>
                     </div>
                </div>
            </div>
        );
    }
}
export default Lpropietarios;