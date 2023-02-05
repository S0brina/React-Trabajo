
import Navbar from "../NavbarUser";

import {useState} from 'react';


function Estadopedido(){
    const [plato] = useState([
        {   title: "Pizza",
            priceU: "15",
            cliente: "Kiyoshi",
            mtotal: "15",
        },
       /* {   title: "Lasagna",
        priceU: "18",
        cliente: "Franco",
        mtotal: "18",
    },*/])

    ;
    const[mesage,setMesage]=useState("en preparacion");
    return (
        <body>
         <Navbar/>   
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Numero pedido</th>
      <th scope="col">producto</th>
      <th scope="col">Precio unitario</th>
      <th scope="col">cliente</th>
      <th scope="col">Montototal</th>
      <th scope="col">Estado de pedido:</th>

      
    </tr>
  </thead>
  {plato.map((item) => {
            const {title, priceU, cliente,Montotal } = item;
            return (
                <tbody>
                <tr>
                 <th scope="row">1</th>
                 <td>{title}</td>
                 <td>{priceU}</td>
                 <td>{cliente}</td>
                 <td>{Montotal}</td>
                 <td><p>{mesage}</p></td>
                 <td><button  className="btn btn-btn-danger" onClick={()=>setMesage("Terminado")}>Actualizar</button></td>
                </tr>
                 </tbody>
              
            );
          })}
  
			
 
 </table>
        </body>
    )
}
export default Estadopedido