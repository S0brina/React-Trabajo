import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Categories from "./Categories";
import NavBar from "../NavbarUser";
import Carrito from "./Carrito";

function App() {
  const [listplatos, setListPlatos] = useState([]);
  const [listCtg, setListCtg] = useState([]);

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
  }, []);

  return (
    <main>
      <NavBar />
      <section className="menu section">
        <div className="info-rest">
          <h2>Marco's Bistro</h2>
          <div>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h5>
          </div>
        </div>
        <Categories categorias={listCtg} onFiltrar={filtrarPlatos} restaurante= {restauranteId}/>
        <Menu plato={listplatos} guardarCarrito = {addToCart} />
        <div>
          <Carrito cartItems={cartItems}/>
        </div>
      </section>
    </main>
  );
}

export default App;
