import Navbar from "../NavbarUser";

function Sorpresa(){
    return (
        <body>
        <Navbar/>   
<form>
  <label>Comentarios y calificacion de clientes</label>          
  <div className="form-group">
    <label for="exampleFormControlInput1">Nombres</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombres"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput2">Apellidos</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Apellidos"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Tipo de restaurante y nombre</label>
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
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
    </body>
    )
} export default Sorpresa