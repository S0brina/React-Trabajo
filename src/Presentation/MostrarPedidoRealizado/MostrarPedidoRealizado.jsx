import React, { Component} from "react";

import "../verEstadoPedido/ver_EstadoPedido.css"
import "../MostrarPedidoRealizado/script"
import Navbar from "../NavBarRest"
import axios from "axios";


const url= "http://127.0.0.1:8000/endpoints/pedidoRelizado";


class MostrarPedidoRealizado extends Component {

state={
  data:{
    pedido: []
  },
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id:'',
    cod: '',
    producto: '',
    precio:'',
    estado:'',
  }
}

peticionGet=()=>{
  axios.get(url).then(response=>{
    this.setState({data: response.data});
  }).catch(error=>{
    console.log(error.message);
  })
  }

  componentDidMount(){
    this.peticionGet();
    console.log(this.state)
  }
  render(){
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
                <th>ID</th>
                <th>Cod Pedido</th>
                <th>Productos</th>
                <th>Precio Total</th>
                <th>Estado</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{console.log(this.state)}
            {
            this.state.data.pedido.map((empresa,xd)=>{
                return(
                  <tr key = {xd}>
                  <td>{empresa.id}</td>
                  <td>{empresa.cod}</td>
                  <td>{empresa.producto}</td>
                  <td>{empresa.precio}</td>
                  <td>{empresa.estado}</td>
                  </tr>
                )
              })}
              
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
}
export default MostrarPedidoRealizado;