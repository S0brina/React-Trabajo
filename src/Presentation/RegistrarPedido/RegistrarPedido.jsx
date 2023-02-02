import Navbar from "../Navbar"
import { useState } from "react"
import "../verEstadoPedido/ver_EstadoPedido.css"
import React from "react";

function RegistrarPedido(){
    const [codigoVer, setcodigoVer] = useState("")
    const data =[
        {id:1, codigo: "5858000", productos:"pizza hawaiana", datos:"miely cyrus", estado: "recogido en tienda"}        
    ]

return(
<body>
    <Navbar />
    <div className="titulo">
          <h2>Registrar Entrega de Pedido</h2>
        </div>
    <div className="container-pedido text-center">
    <form class="d-flex"  
                onSubmit={ev =>{ 
                    ev.preventDefault();
                    setcodigoVer(ev.target.search.value);
                }}
        >
        <div>
            <input name = 'search' className="form-control me-2" type="text" placeholder="Codigo" aria-label="Search"/>

            <button type="submit" className="btn btn-outline-success">Buscar</button>
            <table class="table table-striped table-esp">
            <thead>
                <tr>
                    <th>Codigo Buscado</th>
                    <th>Resumen Producto(s)</th>  
                    <th>Cliente Datos</th>
                    <th> Estado</th>  
                    <th><button type="button" class="btn ">Entregado</button> </th>                   
                </tr>
            </thead>
            <tbody>
                <tr>
                        
                  <td>{codigoVer}</td>
                    <td>pizza hawaiana</td>                    
                    <td> Miley Cyrus, Montecito.</td>
                    <td> Recogido en tienda...</td>
                    
                    
                    
                </tr>
            </tbody>
        </table>
        </div>
    
    </form>
    </div>
    </body>
)
}
export default RegistrarPedido