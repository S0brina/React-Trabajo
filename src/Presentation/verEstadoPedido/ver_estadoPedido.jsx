
import Navbar from "../NavbarUser"
import React, { useEffect, useState} from "react";
//import BuscadorCF from "./components/BuscadorCF"
import "./ver_EstadoPedido.css"
import i07 from "./reloj.png"
import axios from "axios"
import Timer from "../verEstadoPedido/reloj"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';




//const url= "http://127.0.0.1:8000/endpoints/verificarPedido";

function Ver_estadoPedido() {
    const [usuarios, setUsuarios]= useState([]);
    const [tablaUsuarios, setTablaUsuarios]= useState([]);
    const [busqueda, setBusqueda]= useState("");
  
  const peticionGet=async()=>{
    await axios.get("http://127.0.0.1:8000/endpoints/verificarPedido")
    .then(response=>{
        console.log(response.data)
      setUsuarios(response.data);
      console.log(usuarios)
      setTablaUsuarios(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }
  
  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.cliente.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ||
      elemento.cod.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
    {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }
  
  useEffect(()=>{
  peticionGet();
  },[])
    
    return(
        <body>
            <Navbar />
            <div class="container text-center"/>
                <div class="titulo">
                    <h2>Pedidos Realizados Ultimamente</h2>
                </div>
            <div class="container">
            <div className="container-pedidoU">
                    <div class="row col-4">
                        <p>Inserte Codigo de Pedido:</p>  
                    </div>
                    <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre o Empresa"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
                    <div class="card text-center">
            <div class="card-body">
              <h2 class="card-text " >Estado del pedido</h2>
              <img src={i07} alt="reloj"></img>
                <h3 class="card-title" >Tiempo de espera aproximado: 25 minutos</h3>
                <Timer></Timer>

                <table class="table table-striped table-esp">
            <thead>
                <tr style={{color:"black"}}>
                    <th style={{color:"black"}}>Codigo Buscado</th>
                    <th style={{color:"black"}}>Resumen Producto(s)</th>  
                    <th style={{color:"black"}}>Cliente Datos</th>
                    <th style={{color:"black"}}> Hora de Pedido</th>                  
                </tr>
            </thead>
                
                {usuarios.map((pedido)=>{
                return( 
                <tr key={pedido.id}>
               
               <td>{pedido.cod}</td>
               <td>{pedido.producto}</td>
               <td>{pedido.cliente}</td>
               <td>{pedido.hora}</td>
             </tr>)})}
            <tbody>
            
            </tbody>
            </table>
              <div class="row">
                <div class="card col-3 bg-success"> 
                    <div class="card-body"> 
                        <div class="card-text">
                            El local ha aceptado su pedido
                        </div>
                    </div>
                  </div>
                  <div class="card col-3 bg-light"> 
                    <div class="card-body"> 
                        <div class="card-text">
                            El local esta preparando su pedido
                        </div>
                    </div>
                  </div>
                  <div class="card col-3 bg-light"> 
                    <div class="card-body"> 
                        <div class="card-text">
                            Su pedido ha sido recogido
                        </div>
                    </div>
                  </div>
                  <div class="card col-3 bg-light"> 
                    <div class="card-body"> 
                        <div class="card-text">
                            El repartidor esta en camino
                        </div>
                    </div>
                   
                  </div>
              </div>
            </div>
          </div>
        </div>
            </div>
            
        </body>
    )
}


    

    

export default Ver_estadoPedido