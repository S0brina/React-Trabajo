import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login_Cliente from './Presentation/LoginC/Login_Cliente';
import App from './Presentation/Carta/App'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App1 from './Presentation/Lista restaurants/App1';
import App2 from './Presentation/Agregarpedido/App2';
import Login_Rest from './Presentation/LoginR/Login_Rest';
import Hist from './Presentation/Historial/Hist';
import MostrarPedidoRealizado from './Presentation/MostrarPedidoRealizado/MostrarPedidoRealizado';
import RegistrarPedido from './Presentation/RegistrarPedido/RegistrarPedido';
import Ver_estadoPedido from './Presentation/verEstadoPedido/ver_EstadoPedido';
import Sorpresa from './Presentation/sorpresa/Sorpresa';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/Historial' element={<Hist/>}/>
        <Route path= '/loginCliente' element = {<Login_Cliente/>} />
        <Route path='/Restaurante' element = {<App/>}/>
        <Route path='/Registros' element = {<Hist/>}/>
        <Route path= '/lista' element ={<App1/>}/>
       <Route path= '/agregar' element={<App2/>}/>
        <Route path='/loginRest' element ={<Login_Rest/>}/>
        <Route path='/MostrarPedido' element ={<MostrarPedidoRealizado/>}/>
        <Route path='/RegistrarPedido' element ={<RegistrarPedido/>}/>
        <Route path='/verEstadoPedido' element ={<Ver_estadoPedido/>}/>
        <Route path='/sorpresa' element={<Sorpresa/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




