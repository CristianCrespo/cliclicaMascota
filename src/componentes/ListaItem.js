import React from "react";

class ListaItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="mascota-list">
                <div className="row ">
                    <div className="col-1 ">
                        <p>1234</p>
                    </div>
                    <div className="col-3 ">
                        <p>José Gomez Gomez</p>
                    </div>
                    <div className="col-2 col-md-4 ">
                        <p>Calle 12 # 17 - 14 Los Robles</p>
                    </div>
                    <div className="col-3 col-md-2">
                        <p>301111022</p>
                    </div>
                    <div className="col-2 ">
                        <p>Ver/agregar mascota</p>
                    </div>             
                </div>
            </div>
        );
    }
}
export default ListaItem;