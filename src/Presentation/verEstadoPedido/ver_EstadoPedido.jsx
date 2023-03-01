import Navbar from "../NavbarUser"
import React, { useEffect, useState} from "react";
//import BuscadorCF from "./components/BuscadorCF"
import "./ver_EstadoPedido.css"
import i07 from "./reloj.png"
import axios from "axios"
//import Timer from "../verEstadoPedido/reloj"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';




//const url= "http://127.0.0.1:8000/endpoints/verificarPedido";

function Ver_estadoPedido() {
  const [orden, setOrden] = useState("");
  const [error, setError] = useState("");

  const CvRegistrar = function () {
    const [codig, setCodig] = useState("");
    
    const handleSumit = async function (event){ 

      const body = {
        codig: codig,
      };

      const response = await fetch(
        "http://127.0.0.1:8000/endpoints/registrarPedido",
        {
          method:"POST",
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      if (data.error == ""){
        setError(data.error);
        setOrden(data.productos);
      }else{
        setError(data.error);
      }

    };
    return(
      <form>
        <input name = 'search'
         className="form-control me-2"
         type="text"
         placeholder="Codigo"
         aria-label="Search"
         id="id"
         value={codig}
         onChange={(event) => setCodig(event.target.value)}/>

        <button type="button"
        className="btn btn-outline-success" onClick={handleSumit}>
          Buscar</button>
        </form>
    );
  }
  const Tabla = function(){
    if (error === "") {
      if (orden !== "") {
        return (
          <table class="table table-striped table-esp">
        <tbody>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th></th>
        </tr>
        <tr>
        <td>{orden.id}</td>
        <td>{orden.usuario}</td>
        <td>{orden.fecha}</td>
        <td>{orden.estado}</td>
        </tr>
      </tbody>
      </table>
        );
      } else {
        return <div>No hay pedidos seleccionados</div>;
      }
    } else {
      return <div>{error}</div>;
    }

  };

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
                    <CvRegistrar/>
      </div>
                    <div class="card text-center">
            <div class="card-body">
              <h2 class="card-text " >Estado del pedido</h2>
              <img src={i07} alt="reloj"></img>
                <h3 class="card-title" >Tiempo de espera aproximado: 25 minutos</h3>              
                <Tabla/>
            </div>
          </div>
        </div>
            </div>

        </body>
    )
}






export default Ver_estadoPedido