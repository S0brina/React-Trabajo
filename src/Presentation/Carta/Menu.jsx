import React from "react";

function Menu(props) {
  return (
    <div className="section-center ">
      {props.plato.map((value, index) => (
        <>
          <div className=" bg-light cont-plato menu-item">
            <div>
              <img src={value.img} className="photo" />
              <div className="mt-4">
                <h3>{value.title}</h3>
                <div>{value.desc}</div>
                <div>
                  <h4 className="price">S./ {value.price}</h4>
                </div>
                <button className="btn btn-outline-succes" type="button">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Menu;
