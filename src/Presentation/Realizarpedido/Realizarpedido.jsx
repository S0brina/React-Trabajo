import Navbar from "../Navbar"

function Realizarpedido(){
    return (<body>
    <Navbar/>
    <div className="container text-center">
        <div className="titulo">
            <h2>Realizar pedido</h2>
    </div>
    <div className="container-carrito">
        <table className="table table-striped table-esp">
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
    
