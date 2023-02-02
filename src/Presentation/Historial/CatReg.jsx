
const CatReg = () => {
    return(
       <table className="table table-striped table-hover">
                    <thead className="bg-dark">
                        <tr>
                            <th>ID Registro</th>
                            <th>Categoría</th>
                            <th>Fecha de registro</th>  
                            <th> </th>                   
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Pizzas</td>
                            <td>10/02/2021</td>
                            <td>
                                <button className ="btn btn-dark" type="button">Deshacer</button>
                            </td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Pastas</td>
                            <td>10/02/2021</td>
                            <td>
                                <button className="btn btn-dark" type="button">Deshacer</button>
                            </td>
                        </tr>
                    </tbody>
                </table> 
    )
}
export default CatReg;
    