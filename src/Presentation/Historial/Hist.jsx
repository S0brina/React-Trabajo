import React from "react";
import PlatosReg from "./PlatosReg";
import Categorias from "./Categorias";
import NavBarRest from "../NavBarRest";
import { useEffect, useState } from "react";
import Categories from "../Carta/Categories";

function Hist() {
  const [listpr, setListPr] = useState([]);
  const [listcr, setListCr] = useState([]);
  const [listFiltro, setListFiltro] = useState([]);
  const [restauranteId, setRestauranteId] = useState('');

  const categoriasPlatos = async function (idRest) {
    try {
      const response = await fetch(
        `https://demotdjango3.azurewebsites.net/endpoints/Categorias?restaurant=${idRest}`
      );
      const data = await response.json();
      if (data.error === " ") {
        setListCr(data.categorias);
        setListFiltro(data.categorias);
      } else console.error(data.error);
    } catch (error) {
      console.error("Error de comunicacion");
    }
  };

  const PlatosFiltrados = async function (idCat, idRest) {
    try {
      const response = await fetch(
        `https://demotdjango3.azurewebsites.net/endpoints/Carta?categoria=${idCat}&restaurant=${idRest}`
      );
      const data = await response.json();

      if (data.error === " ") {
        setListPr(data.carta);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error de comunicacion");
    }
  };
 
  useEffect(function () {
    const storedValue = sessionStorage.getItem('data');
    if (storedValue){
      const value = JSON.parse(storedValue);
      setRestauranteId(value.id);
    }
    categoriasPlatos(restauranteId);
    PlatosFiltrados(-1, restauranteId);
  }, [restauranteId]);

  return (
    <main>
      <NavBarRest />
      <div className="bg-light cont-hist">
        <div>
          <Categorias categorias={listcr} />
        </div>
        <h3>Platos registrados</h3>
        <div>
          <Categories
            categorias={listFiltro}
            onFiltrar={PlatosFiltrados}
            restaurante={restauranteId}
          />
          <PlatosReg platos={listpr} />
        </div>
      </div>
    </main>
  );
}
export default Hist;
