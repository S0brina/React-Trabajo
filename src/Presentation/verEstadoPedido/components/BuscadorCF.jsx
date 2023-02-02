import { useState } from "react"


function BuscadorCF(props){

    const [codigoVer, setcodigoVer] = useState("")

    /*const butOnClick = function(){
        props.on
    }*/

    return <form class="d-flex" role="search">
        <div>
            <input className="form-control me-2" type="search" placeholder="Codigo" aria-label="Search"
                value={codigoVer}
                onChange={ function(evt) {setcodigoVer(evt.target.value) } }/>

            <button className="btn btn-outline-success" type="submit">Buscar</button>
            <h5>En caso de algun problema su codigo de pedido es: codigoVer</h5>
        </div>
    </form>
}

export default BuscadorCF