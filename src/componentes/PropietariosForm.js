import React from "react";

class PropietariosForm extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                <h5><strong>Agregar Propietarios</strong></h5>
                    <div className="form-group">
                        <label htmlFor="nombre"><strong>Nombre</strong></label>
                        <input type="text" id="nombre" class="form-control" placeholder="Nombre"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="direccion"><strong>Dirección</strong></label>
                        <input type="text" id="direccion" class="form-control" placeholder="Dirección"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono"><strong>Teléfono</strong></label>
                        <input type="number" id="telefono" class="form-control" placeholder="Teléfono"/>
                    </div>
                    <hr></hr>
                    <div >
                        <button type="submit" class="btn btn-primary">+ agregar</button>
                    </div>
            </form>  
        );
    }
}
export default PropietariosForm;