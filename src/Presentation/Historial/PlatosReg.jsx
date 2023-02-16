function PlatosReg(props){
    return <table className="table table-hover">
        <thead> 
            <tr>
                <th>ID plato</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Descripcion</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            {props.platos.map((pl,index)=>{
            <><><td>{pl.id}</td><td>{pl.nombre}</td><td>{pl.categoria}</td></><div>{pl.descripcion}</div><div>{pl.fecha}</div></>
            })
            }
        </tbody>
    </table>
}
export default PlatosReg