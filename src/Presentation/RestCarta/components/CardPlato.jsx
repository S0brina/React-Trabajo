function CardPlato(props){
    return<div className="row align-items-start">
        <div className ="plato-info">
            <div className="plato-img">
                    <img src={props.plato.imagen}
                        alt = "..." /> 
            </div>
            <div className="plato-title">
                    <h3>{props.plato.nombre}</h3>
            </div>
            <div className="plato-descrip">
                    <h6>{props.plato.descripcion}</h6>
            </div>
            <div className="plato-precio">
                    <h6>{props.plato.precio}</h6>
            </div>
            <button className="btnagr" type="button">
            Agregar
        </button>
        </div>
    </div>
} export default CardPlato