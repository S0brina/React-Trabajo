import React from "react";
import PlatosReg from "./PlatosReg";
import Categorias from "./Categorias";
import NavBarRest from "../NavBarRest"
import { useEffect, useState } from "react"
import Categories from "../Carta/Categories";


function Hist(){
    const [listpr, setListPr] = useState([]);
    const [listcr, setListCr] = useState([]);
    const [listFiltro, setListFiltro] = useState([])

    const categoriasPlatos = async function (idRest) {
        try {
          const response = await fetch(
            `http://localhost:8000/endpoints/Categorias?restaurant=${idRest}`
          );
          const data = await response.json();
          if(data.error===" "){
            setListCr(data.categorias);
            setListFiltro(data.categorias);
          }else
            console.error(data.error);
        } catch (error) {
          console.error("Error de comunicacion");
        }
    };


    const PlatosFiltrados = async function(idCat,idRest){
        try {
            const response = await fetch(
              `http://localhost:8000/endpoints/Carta?categoria=${idCat}&restaurant=${idRest}`
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

    
    const restauranteId = 1;

    useEffect(function(){
        categoriasPlatos(restauranteId)
        PlatosFiltrados(-1, restauranteId)
    },[])


    return(<main>
    <NavBarRest />
    <div className="bg-light cont-hist">
        <div>
            <h2>Categorias registradas</h2>
            <Categorias categorias = {listcr} />
            </div>
        
        <div>
            <h2>Platos registradoss</h2>
            <Categories categorias = {listFiltro} onFiltrar = {PlatosFiltrados} restaurante = {restauranteId}/>
            <PlatosReg platos = {listpr} />
        </div>
    </div>    
    </main>
    )
}
export default Hist