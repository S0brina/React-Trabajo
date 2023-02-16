

function Categorias(props){
    return <table className="table table-hover">
        <thead> 
            <tr>
                <th>ID Categoria</th>
                <th>Categoria</th>
                <th>Fecha de registro</th>
            </tr>
        </thead>
        <tbody>
            {props.categorias.map((cat,index)=>{
            <><td>{cat.id}</td><td>{cat.categoria}</td><td>{cat.fecha}</td></>
            })
            }
        </tbody>
    </table>
}
export default Categorias