const PlatosReg = () => {
    return(
        <div>
         <select className="mb-3">
                    <option>Pizzas</option>
                    <option>Pastas</option>
                    <option>Bebidas C</option>
                </select>
        <table className="table table-striped table-esp table-hover">
        <thead className="bg-dark">
            <tr>
                <th>ID Registro</th>
                <th>Plato</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Fecha de registro</th>  
                <th> </th>                   
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>03434</td>
                <td>Lasagna</td>
                <td>Pastas</td>
                <td>Lasagna personal(300gr)</td>
                <td>18/01/2023</td>
                <td>
                    <button className="btn btn-dark" type="button">Deshacer</button>
                </td>
            </tr>
        </tbody>
    </table>   
        </div>
        
    )
}
export default PlatosReg;
