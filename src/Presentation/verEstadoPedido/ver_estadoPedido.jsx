
import Navbar from "../NavbarUser"
import BuscadorCF from "./components/BuscadorCF"
import "./ver_EstadoPedido.css"
import i07 from "./reloj.png"

let mostrarTiempo = document.getElementById('t-restante');

let temporizador=false;
let timer =60;
let timerInicial =60;
let tiempoRegresivoid =null;



function Ver_estadoPedido() {

    return(
        <body>
            <Navbar />
            <div class="container text-center"/>
                <div class="titulo">
                    <h2>Pedidos Realizados Ultimamente</h2>
            </div>
            <div className="container-pedidoU">
                    <div class="row col-2">
                    <p>Inserte Codigo de Pedido:</p>  
                    <BuscadorCF/>
                    <div className="card">
                        <h2>Estado del pedido</h2>
                        
                        <p>TIEMPO TRANSCURRIDO:</p>
                        <img src={i07} alt="reloj"></img>
                    </div>
                    </div>
                   <div className="row">
                   <div class="card col-3 bg-success"> 
                    <div class="card-body"> 
                        <div class="card-text">
                            El local ha aceptado su pedido
                        </div>
                    </div>
                  </div>
                  <div class="card col-3 bg-light"> 
                    <div class="card-body"> 
                        <div class="card-text">
                            El local esta preparando su pedido
                        </div>
                    </div>
                  </div>
                  <div class="card col-3 bg-light"> 
                    <div class="card-body"> 
                        <div class="card-text">
                            Su pedido ha sido recogido
                        </div>
                    </div>
                  </div>
                  <div class="card col-3 bg-light"> 
                    <div class="card-body"> 
                        <div class="card-text">
                            El repartidor esta en camino
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </body>
    )


}
export default Ver_estadoPedido