import React from "react";
class Inicio extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className="col text-center">
                    <h5> Esta es la pagina de inicio... </h5>
                    <div className="col-md-12 text-left">
                       <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                          anim id est laborum.</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Inicio;