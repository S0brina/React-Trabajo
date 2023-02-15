import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Menu from "./Menu";
import Categories from "./Categories";

function App(){
  const [listplatos, setListPlatos] = useState([])
  const [listCtg, setListCtg] = useState([])

  const getCategoriaAsyncAwait = async function(){
    try{
      const response = await fetch("link")
      const data = await response.json()
      setListCtg(data)
    }catch(error){
       console.error("Error obteniendo categorias")
    }
  }

  const filtrarPlatos = async function(ctgId){
    try{
      const response = await fetch("link")
      const data = await response.json()

      if (data.error ===""){
        setListPlatos(data.platos)
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
    if (location.state == null){
      navigate("/")
    }else{
      getCategoriaAsyncAwait()
      filtrarPlatos(-1)
    }
  }, [])

  return location.state!== null
    ? <main>
      <section className="menu section">
        <div className="info-rest">
          <h4>Marco's Bistro</h4>
          <div>
           <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5> 
          </div>
        </div>
        <Categories
          categorias={listCtg}
          onFiltrar={filtrarPlatos}
        />
        <Menu platos={listplatos} />
      </section>
    </main>
    : <div>Error</div>
  
};

export default App;
