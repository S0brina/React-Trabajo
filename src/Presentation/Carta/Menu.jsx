import React from "react";

function Menu( props ) {
  return <div className="section-center bg-light cont-plato">
  <img src={ props.plato.img } 
      className="photo" 
      alt="..." />
  <div className="card-body">
      <h5 className="card-title">{props.plato.title}</h5>
      <p className="card-text">{props.plato.price}</p>
      <p className="card-text">{props.plato.desc}</p>
  </div>
</div>
}

export default Menu;
