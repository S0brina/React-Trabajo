import Navbar from "../NavBarRest"
import React, { Component} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../verEstadoPedido/ver_EstadoPedido.css"
import "bootstrap/dist/css/bootstrap.min.css";


function RegistrarPedido() {
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
      const Vacio = function () {
        console.log("Se hizo click");
        setOrden("");
        setError("");
        return <div>zzzz</div>;
      };

      const cambiarEstadoPedido = (id, nuevoEstado) => {
        fetch('http://127.0.0.1:8000/endpoints/actualizarPedido', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: id, estado: nuevoEstado})
        })
        .then(response => {
          console.log(response);
          setOrden(orden.map(orden => {
            if (orden.id === id) {
              return {
                ...orden,
                estado: nuevoEstado
              };
            }
            return orden;
          }));
        })
        .catch(error => {
          console.log(error);
        });
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
              <th>Detalles</th>
              <th>Monto</th>
              <th>Dirección</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th></th>
            </tr>
            <tr>
            <td>{orden.id}</td>
            <td>{orden.usuario}</td>
            <td>{orden.detalles}</td>
            <td>{orden.monto}</td>
            <td>{orden.direccion}</td>
            <td>{orden.fecha}</td>
            <td>{orden.estado}</td>
              <td>
                <button className="btn btn-primary" onClick={cambiarEstadoPedido(orden.id, 'ENTREGADO')}>Confirmar Entrega</button>
              </td>
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
      
      const navigate = useNavigate();
      

return(
<body>
    <Navbar />
    <div className="titulo">
          <h2>Registrar Entrega de Pedido</h2>
        </div>
    <div className="container-pedido text-center">

        <div>
          <CvRegistrar/>
            <Tabla/>
        </div>


    </div>
    </body>
    )
        }

export default RegistrarPedido