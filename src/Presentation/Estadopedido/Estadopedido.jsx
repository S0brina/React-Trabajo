import Navbar from "../Navbar";
import i1 from "../imagenes1/img11.png"

function Estadopedido(){
    var mesage="terminado";
    return (
        <body>
            <Navbar/>
         <div className="layerlist1">
			<h3>01</h3>
			<div className="restaurant1">
				<h4>Pizza americana</h4>
				<h5>mesa 5</h5> </div>
                        <div className="layerlist1">
                        
                        <img className="i1" src={i1} alt="imageAlbum"/> 
			</div>
</div>
			
 <div className="container text-center py-5">
    <p>Estado de pedido</p>
  <h2  id="titulo" className="display-3 py-5">En preparacion</h2>
  <button id="boton" className="btn btn-btn-danger" onclick='document.getElementById("titulo").innerHTML= mesage; '>Actualizar</button>
 </div>
 
        </body>
    )
}
export default Estadopedido