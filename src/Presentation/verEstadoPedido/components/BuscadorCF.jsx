import { useState } from "react"

import "../ver_EstadoPedido.css"
const BuscadorCF = () => {

    const [codigoVer, setcodigoVer] = useState("")


    return (
        <form class="d-flex"  
                onSubmit={ev =>{ 
                    ev.preventDefault();
                    setcodigoVer(ev.target.search.value);
                }}
        >
        <div>
            <input name = 'search' className="sr-only" type="text" placeholder="Codigo" aria-label="Search"/>

            <button type="submit" className="btn btn-outline-success">Buscar</button>
            <h5>En caso de algun problema su codigo de pedido es: {codigoVer}</h5>
        </div>
    </form>
    );
};

export default BuscadorCF