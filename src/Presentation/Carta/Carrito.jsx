import React, { useEffect, useState } from "react";

const Carrito = (props) => {
  useEffect(() => {
    console.log(props.cartItems);
  }, []);
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "white", borderRadius: "1rem" }}
    >
      <h3>Carrito de Compras:</h3>
      {props.cartItems.length == 0 ? (
        <div>No hay items en el carrito.</div>
      ) : (
        props.cartItems.map((item) => {
          console.log(item);
          return (
            <div className="row">
              <div className="col-5">
                <img src={item.img} style={{ width: "100%", height: "auto" }} />
              </div>
              <div
                className="col-7"
                style={{ fontSize: "15px", lineHeight: "5px" }}
              >
                <p>
                  <b>{item.name}</b>
                </p>
                <p>Precio Unitario: {item.price}</p>
              </div>
              <hr />
            </div>
          );
        })
      )}
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-success"
          type="button"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Carrito;