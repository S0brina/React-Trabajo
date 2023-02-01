import CardPlato from "./CardPlato";

function Categorias(props){
    const listaRows = []
    let listaCols = []

    props.platos.forEach(function(plato,index){
        if(index % 3 ===0){
            listaCols.push(
                <div className ="col">
                    <CardPlato key={plato.id} plato={plato}/>
                </div>
            )
        }else{
            listaCols.push(
                <div className ="col">
                    <CardPlato key={plato.id} plato={plato}/>
                </div>
            )
            listaRows.push(
                <div className = "row align-items-start">
                    {listaCols}
                </div>
            )
            listaCols=[]
        }
    })

    if(props.platos.length % 3 !== 0){
        listaCols = []
        listaCols.push(
            <div className = "col">
                < CardPlato key={props.platos[props.platos.length -1].id} 
                    plato={props.platos[props.platos.length-1]}/>
            </div>
        )
        listaRows.push(        
            <div className="row align-items-start">
                {listaCols}
            </div>
        )
    }

    return <div>
        {listaRows}
    </div>
}
export default Categorias