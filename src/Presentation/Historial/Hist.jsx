import React from "react";
import CatReg from "./CatReg";
import PlatosReg from "./PlatosReg";
import NavBarRest from "../NavBarRest"

const Hist = () => {
    return(
    <main>
    <NavBarRest />
    <div className="bg-light cont-hist">
        <div>
            <h2>Categorias registradas</h2>
            <CatReg />
            </div>
        
        <div>
            <h2>Platos registradoss</h2>
            <PlatosReg />
        </div>
    </div>    
    </main>
    );
};
export default Hist;