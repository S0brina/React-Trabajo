import Navbar from "../NavbarUser"

function Realizarpedido(){
    return (<body>
    <Navbar/>
    <div className="container text-center">
        <div className="titulo">
            <h2>Realizar pedido</h2>
    </div>
    <div className="container carrito">
    <form>
  <div class="form-group mb-6">
    <label for="exampleFormControlInput1">Nombres y Apelllidos</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombres y apellidos"/>
  </div>
  <div class="form-group mb-6">
    <label for="exampleFormControlInput1">Correo electronico</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="correo electronico"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Modalidad de pago</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1. Efectivo</option>
      <option>2. Credito</option>
    </select>
  </div>
  <div class="form-group mb-4">
    <label for="exampleFormControlInput1">Direccion</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Direccion"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Recomendaciones al dejar el pedido</label>
    <textarea class="form-control mb-6" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
        <table className="table table-striped table-esp mb-6">
            <thead>
                <tr>
                    <th>Número de orden</th>
                    <th>Restaurante</th>                    
                    <th>Plato</th>
                    <th>Precio</th>
                    <th>Unidades</th>
                    <th> </th>                   
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>Chifa ABC</td>
                    <td>Arroz Chaufa</td>
                    <td>S/20.00 </td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Chifa XYZ</td>
                    <td>Arroz Chaufa</td>
                    <td>S/20.00 </td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>Marco's Bistro</td>
                    <td>Pizza Hawaina Familiar</td>
                    <td>S/60.00 </td>
                    <td>1
                    </td>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td>S/100.00 </td>
                    
                </tr>
            </tbody>
        </table>
        <div className="col">
            <a className="btn" href="#">Realizar pedido</a>
        </div>
    </div>
    </div>
    </body>)}
    export default Realizarpedido
    
