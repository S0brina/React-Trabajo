import React, { useEffect, useState, Component } from 'react';
import "../verEstadoPedido/ver_EstadoPedido.css"
//import "../MostrarPedidoRealizado/script"
import Navbar from "../NavBarRest";

function MostrarPedidoRealizado() {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    async function fetchOrdenes() {
      const response = await fetch('http://localhost:8000/endpoints/verificarPedido');
      const data = await response.json();
      setOrdenes(data.ordenes);
    }
    fetchOrdenes();
  }, []);

  return (
    <div>
      <Navbar />
      <center><h1>Estado de pedidos</h1></center>
      <table class="table table-striped table-esp">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Monto</th>
            <th>Dirección</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map(orden => (
            <tr key={orden.id}>
              <td>{orden.id}</td>
              <td>{orden.usuario}</td>
              <td>{orden.monto}</td>
              <td>{orden.direccion}</td>
              <td>{orden.fecha}</td>
              <td>{orden.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}
export default MostrarPedidoRealizado;