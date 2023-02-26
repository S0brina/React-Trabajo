function Restaurante(props) {
    return (
        <div className="info-rest text-center">
          {props.restaurante.map((rest)=>{
            const {id, nombre, desc,img} = rest;
            return(
              <div key={id}>
              <img src = {img} alt={nombre}/>
              <div>
                <h2>{nombre}</h2>
              </div>
                <h5>{desc}</h5>
              </div>
            )})}
        </div>
    );
}
export default Restaurante;
  