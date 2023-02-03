import React from "react";
import "../verEstadoPedido/ver_EstadoPedido.css"
import "../MostrarPedidoRealizado/script"
import Navbar from "../NavBarRest"

const MostrarPedidoRealizado = () => {

    return(
      
        <div>
          <Navbar />
          
            <div className="container text-center">
        <div className="titulo">
          <h2>Pedidos Realizados Ultimamente</h2>
        </div>
        <div className="container-pedido">
          <table className="table table-striped table-esp">
            <thead>
              <tr>
                <th>Cod Pedido</th>
                <th>Producto(s)</th>
                <th>Precio Total</th>
                <th>Estado</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04520881</td>
                <td>Pizza Hawaiana</td>
                <td> 32 soles</td>
                <td> Enviado</td>
                <td>
                  <button type="button" className="btn ">Deshacer</button>
                </td>
              </tr>
              <tr>
                <td>04520881</td>
                <td>Pizza Hawaiana</td>
                <td> 32 soles</td>
                <td> Enviado</td>
                <td>
                  <button type="button" className="btn ">Deshacer</button>
                </td>
              </tr>
              <tr>
                <td>04520881</td>
                <td>Pizza Hawaiana</td>
                <td> 32 soles</td>
                <td> Enviado</td>
                <td>
                  <button type="button" className="btn">Deshacer</button>
                </td>
              </tr>
              <tr>
                <td>04520881</td>
                <td>Pizza Hawaiana</td>
                <td> 32 soles</td>
                <td> Enviado</td>
                <td>
                  <button type="button" className="btn ">Deshacer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        </div>
        {/* <form onSubmit={preventDefault().onSubmit()} autoComplete="off">
        <div className="tablita">
          <table className="tabla" id="tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>País</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <div className="caja">
          <label htmlFor="nom">Nombre</label> <input type="text" id="nom" placeholder="Escriba aqui" required />
          <label htmlFor="ape">Apellido</label> <input type="text" id="ape" placeholder="Escriba aqui" required />
          <label htmlFor="pais">País</label> <input type="text" id="pais" placeholder="Escriba aqui" required />
        </div>
        <br />
        <input className="submit" type="submit" defaultValue="Escribir" />
      </form> */}
        </div>

    )


}
export default MostrarPedidoRealizado