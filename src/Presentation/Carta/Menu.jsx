import React from "react";

function Menu(props) {
  return (
    <div className="container-fluid row row-cols-1 row-cols-md-3 g-4">
      {props.plato.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <div class="col-lg-4 col-md-6 col-sm-6" key={id}>
            <div class="card h-100">
              <img src={img} alt={title} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h4 className="price">S./{price}</h4>
                <p class="card-text">{desc}</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    onClick={() => {props.guardarCarrito(id, title, price, img)}}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;