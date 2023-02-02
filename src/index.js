import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login_Cliente from './Presentation/LoginC/Login_Cliente';
import App from './Presentation/Carta/App'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ListaRestaurantMA from './Presentation/Lista-restaurant/ListaRestaurantMA';
import ListaRestaurantC from './Presentation/Lista-restaurant/ListaRestaurantC';
import ListaRestaurantP from './Presentation/Lista-restaurant/ListaRestaurantP';
import Realizarpedido from './Presentation/Realizarpedido/Realizarpedido';
import Agregarplatochifa from './Presentation/Agregarpedido/Agregarplatochifa';
import Agregarplatopizza from './Presentation/Agregarpedido/Agregarplatopizza';
import Agregarplatomariscos from './Presentation/Agregarpedido/AgregarplatoMariscos';
import Estadopedido from './Presentation/Estadopedido/Estadopedido';
import Ranking from './Presentation/Ranking/Ranking';
import Login_Rest from './Presentation/LoginR/Login_Rest';
import Carrito from './Presentation/ShopCar/Carrito';
import Ver_estadoPedido from './Presentation/verEstadoPedido/ver_estadoPedido';
import MostrarPedidoRealizado from './Presentation/MostrarPedidoRealizado/MostrarPedidoRealizado';
import RegistrarPedido from './Presentation/RegistrarPedido/RegistrarPedido';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path= '/loginCliente' element = {<Login_Cliente/>} />
        <Route path='/MarcosBistro' element = {<App/>}/>

        <Route path= '/listaMA' element ={<ListaRestaurantMA/>}/>
        <Route path= '/listaC' element ={<ListaRestaurantC/>}/>
        <Route path= '/listaP' element ={<ListaRestaurantP/>}/>
        <Route path='/realizarpedido' element={<Realizarpedido/>}/>
        <Route path= 'agregarchifa' element={<Agregarplatochifa/>}/>
        <Route path= 'agregarmariscos' element={<Agregarplatomariscos/>}/>
        <Route path= 'agregarpizza' element={<Agregarplatopizza/>}/>
        <Route path= 'estadopedido' element={<Estadopedido/>}/>
        <Route path= 'ranking' element={<Ranking/>}/>
        <Route path='/loginRest' element ={<Login_Rest/>}/>
        <Route path='/ShopCar' element={<Carrito/>}/>
        <Route path='/ver_estadoPedido' element={<Ver_estadoPedido/>}/>
        <Route path='/MostrarPedidoRealizado' element={<MostrarPedidoRealizado/>}/>
        <Route path='/RegistrarPedido' element={<RegistrarPedido/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




