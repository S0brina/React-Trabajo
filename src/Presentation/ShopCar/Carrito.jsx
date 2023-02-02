import { useState } from "react";
import NavBar from "../NavbarUser"

function Carrito() {
  const [cards] = useState([
    {
        img: "",
        title: "Card-1",
        priceU: "40",
        cant: "1",
        mtotal: "40",
    },
    {
        img: "",
        title: "Card-1",
        priceU: "20",
        cant: "1",
        mtotal: "40",
    },
    {
        img: "",
        title: "Card-1",
        priceU: "46",
        cant: "1",
        mtotal: "40",
    },
    
  ]);

    return (
        <main>
            <NavBar />    
            <div className="section-car bg-light">
        <h1>Carrito de compras</h1>
        <div>
          {cards.map((item) => {
            const { img, title, priceU, cant, mtotal } = item;
            return (
              <div className="bg-light cont-car">
              <article className="car-item row">
                <img src={img} alt={title} className="photo-car col-md" />
                
                <div className=" col-md">
                    <div>{title}</div>
                </div>

                <div className=" col-md">
                    <div>Precio Unitario: S./{priceU}</div>
                </div>
                
                <div className=" col-md-3">
                    <button className="btn btn-outline-success mx-2 " type="button">
                    -
                    </button>{cant}
                    <button className="btn btn-outline-success mx-2 " type="button">
                    +
                    </button>
                </div>
                <div className="col-md">
                    <div>Monto total: S./{mtotal}</div>
                </div>
                  
                  
                
          
              </article>
              </div>
            );
          })}

        <button className="btn btn btn-outline-success btn-lg" type="button">
        Realizar compra
        </button>
        </div>
        </div>
        </main>
        
        
      );
};

export default Carrito;