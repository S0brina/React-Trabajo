import Menu from "./Menu";

function ListaPlatos(props){
    const listaRows = []
    let listaCols = []

    props.platos.forEach(function(plato, index){
        if (index % 2 === 0){
            listaCols.push(
                <div className = "col-md-4">
                    <Menu key={plato.id} plato={plato}/>
                </div>
            )
        }else{
            listaCols.push(
                <div className="col-md-4">
                    {listaCols}
                </div>
            )
            listaCols=[]
        }
    })

    if (props.platos.length % 2 != 0){
        listaCols=[]
        listaCols.push(
            <div className="col-md-4">
                <Menu key={props.platos[props.platos.length-1].id}
                plato = {props.platos[props.platos.length-1] }/>
            </div>
        )
        listaRows.push(
            <div className="row">
                {listaCols}
            </div>
        )
    }
    return <div>
        {
            listaRows
        }
    </div>

}
export default ListaPlatos