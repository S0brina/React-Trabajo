import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Categories from "./Categories";
import NavBar from "../NavbarUser";
import Carrito from "./Carrito";
import Restaurante from "./Restaurante";

function App() {
  const [listplatos, setListPlatos] = useState([]);
  const [listCtg, setListCtg] = useState([]);
  const [infoRest, setInfoRest] = useState([]);

  const getCategoriaAsyncAwait = async function (idRest) {
    try {
      const response = await fetch(
        `http://localhost:8000/endpoints/Categorias?restaurant=${idRest}`
      );
      const data = await response.json();
      if(data.error===" "){
        setListCtg(data.categorias);
      }else
        console.error(data.error);
    } catch (error) {
      console.error("Error obteniendo categorias");
    }
  };

  const filtrarPlatos = async function (idCat,idRest) {
    try {
      const response = await fetch(
        `http://localhost:8000/endpoints/Carta?categoria=${idCat}&restaurant=${idRest}`
      );
      const data = await response.json();

      if (data.error === " ") {
        setListPlatos(data.carta);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error de comunicacion");
    }
  };

  const infoRestaurante = async function (idRest){
    try{
      const response = await fetch(
        `http://127.0.0.1:8000/endpoints/Restaurantes?id=${idRest}`
      );
      const data = await response.json();

      if (data.error === " "){
        setInfoRest(data.restaurantes);
      }else{
        console.error(data.error);
      }
    }catch(error){
      console.error("Error al obtener restaurante");
    }
  };

  const [cartItems, setCartItems] = useState( []
    );
  useEffect(() => {}, [cartItems]);

  const addToCart = (id, name, price, img) => {
    let cartCopy = [...cartItems];
    let existingItem = cartCopy.find((cartItem) => cartItem.id == id);
    if (existingItem) {
      existingItem.quantity += 1; //update item
    } else {
      cartCopy.push({
        id: id,
        name: name,
        price: price,
        img: img,
        quantity: 1,
      });
    }
    setCartItems(cartCopy);
    console.log(cartItems);
  }   

  const restauranteId = 1;

  // const location = useLocation();
  // const navigate = useNavigate();

  useEffect(function () {
    getCategoriaAsyncAwait(restauranteId);
    filtrarPlatos(-1, restauranteId);
    infoRestaurante(restauranteId);
  }, []);

  return (
    <main>
      <NavBar />
      <section className="menu section">
        <Restaurante restaurante = {infoRest} />
        <div className="row">
        <Categories categorias={listCtg} onFiltrar={filtrarPlatos} restaurante= {restauranteId}/>
        <div className="col-lg-9 col-md-9 col-sm-12">
        <Menu plato={listplatos} guardarCarrito = {addToCart} />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <Carrito cartItems={cartItems}/>
        </div>
        </div>
      </section>
    </main>
  );
}

export default App;
