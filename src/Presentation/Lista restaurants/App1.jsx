import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Menu from "./Menu";
import Categories from "./Categories";
import NavBar from "../NavbarUser";

function App1(){
  const [listplatos, setListPlatos] = useState([])
  const [listCtg, setListCtg] = useState([])

  const getCategoriaAsyncAwait = async function(){
    try{
      const response = await fetch("http://localhost:8000/endpoints/restaurant/categorias")
      const data = await response.json()
      setListCtg(data.categorias)
    }catch(error){
       console.error("Error obteniendo categorias")
    }
  }

  const filtrarPlatos = async function(category){
    try{
      const response = await fetch(`http://localhost:8000/endpoints/restaurant/listar?categoria=${category}`)
      const data = await response.json()

      if (data.error ===""){
        setListPlatos(data.restaurante)
      }else{
        console.error(data.error)
      }
    }catch(error){
      console.error("Error de comunicacion")
    }
  }

  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(function(){
      getCategoriaAsyncAwait()
      filtrarPlatos(-1)
  }, [])
  return (
    <main>
      <NavBar/>
      <section className="menu section">
        <div className="info-rest">
          <h4>Lista restaurante</h4>
          <div>
           <h5></h5> 
          </div>
        </div>
        <Categories
          categorias={listCtg}
          onFiltrar={filtrarPlatos}
        />
        <Menu plato={listplatos} />
      </section>
    </main>
  );
};

export default App1;