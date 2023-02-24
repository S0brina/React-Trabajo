import React from "react";

function Categories(props,){
  return <div className = "mt-3 mb-4">
    <select className="form-select" onChange={function(evt) {
      props.onFiltrar(evt.target.value)
    }}>
      <option value ={-1}>Todo</option>
      {
        props.categorias.map(function(ctg){
          return <option value = {ctg.idCat}>
            {ctg.categoria}
          </option>
        })
      }
    </select>
  </div>
};
export default Categories