import Navbar from "../NavbarUser";
<<<<<<< HEAD
import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
=======
import sorpre from "./sorpre.css"
>>>>>>> e2bc358337fc68d9bff9dc694961b3251fd8577e

function Sorpresa(){
 const [comentario, Setcomentario]=useState("")
 const [restaurante, Setrestaurante]=useState("")
 const [cliente, Setcliente]=useState("")
 const httpguardarformulario=async(comentario, restaurante, cliente)=>{
  const data={
    comentario: comentario,
    restaurante: restaurante,
    cliente: cliente,
  }
 
 const resp=await fetch("http://localhost:8000/endpoints/cuestionario", {
  method:"POST",
  body:JSON.stringify(data),
  headers:{"content-Type":"aplicacion/json"}
 })
 const dataResp=await resp.json()
 if(dataResp.error !==""){console.log("hubo un error")}}
 const saveprofile =(comentario, restaurante, cliente)=>{
  httpguardarformulario(comentario,restaurante, cliente)
 }
    return (
        <body>
        <Navbar/>   
<form>
  <div className="info-rest">
  <h2>Comentarios y calificacion de clientes</h2>          
  <div className="form-group">
    <label for="exampleFormControlInput1">Nombres</label>
    <input type="text" className="form-control" value={cliente} onChange={(evt)=>{Setcliente(evt.target.value)}}id="exampleFormControlInput1" placeholder="Nombres"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Tipo de restaurante y nombre</label>
    <input type="text" className="form-control" value={restaurante} onChange={(evt)=>{Setrestaurante(evt.target.value)}}id="exampleFormControlInput1" placeholder="restaurante"/>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Pizzas: Marco`s bistro</option>
      <option>Chifa: Chifa ABC</option>
      <option>Mariscos: Mibarrunto</option>
      </select>
  </div>    
  <div class="form-group">
    <label for="exampleFormControlSelect1">Nivel de satisfaccion</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1 "muy satisfechos"</option>
      <option>2 "satisfecho"</option>
      <option>3 "Regular"</option>
      <option>4 "No satisfecho"</option>
      <option>5 "No recomendable"</option>
    </select>
  </div>
  <div class="form-group">

    <label for="exampleFormControlTextarea1">Opinines </label>
    <input type="text" className="form-control" value={comentario} onChange={(evt)=>{Setcomentario(evt.target.value)}}id="exampleFormControlInput1" placeholder="Comentario"/>

    <label for="exampleFormControlTextarea1">Opiniones </label>

    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </div>
</form>
    </body>
    )
} export default Sorpresa