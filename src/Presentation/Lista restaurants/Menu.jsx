import React from "react";
import { useNavigate } from "react-router-dom";

function Menu( props ){

  const navigate=useNavigate()
  function navi(){
    let dataJson=JSON.stringify(props)
    
    sessionStorage.setItem("idRestaurant",dataJson)
    navigate("/Restaurante")
  }

  return (
    <div className= "section-center ">
        {props.plato.map((value,index)=>(
          <div className=" bg-light cont-plato menu-item">
            <div><img src={value.img} className="photo" />
             <div className="mt-4">
              <h3>{value.nombre}</h3>
              <div>{value.desc}</div>
            <button className="btn btn-outline-succes" type="button" onClick={()=>navi({value})}>Ir a carta</button>
          </div></div></div>
          )
        
        )
        }
    </div>)

}

export default Menu
