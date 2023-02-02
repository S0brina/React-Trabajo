import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <div className="bg-light cont-plato">
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <div>
                <h4>{title}</h4>
                <h4 className="price">Opcion.{price}</h4>
              </div>
              <div className="item-text">{desc}</div>
            </div>
            <button className="btn btn-outline-success mx-2 mt-4" type="button">
            Agregar
        </button>
          </article>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
