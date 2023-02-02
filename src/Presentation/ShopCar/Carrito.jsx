import { useState } from "react";
import NavBar from "../NavbarUser"

function Carrito() {
  const [cards] = useState([
    {
        img: "https://th.bing.com/th/id/OIP.bV2Ekh5Np4SGQ9TrdamsMwHaF6?pid=ImgDet&rs=1",
        title: "Coca Cola personal",
        priceU: "4",
        cant: "1",
        mtotal: "4",
    },
    {
        img: "https://plazavea.vteximg.com.br/arquivos/ids/1538987-220-220/26887.jpg?v=637548077932200000",
        title: "Pizza Americana Familiar",
        priceU: "50",
        cant: "1",
        mtotal: "50",
    },
    {
        img: "https://plazavea.vteximg.com.br/arquivos/ids/415006-1000-1000/20200389.jpg?v=637370980289900000",
        title: "Inca Kola Personal",
        priceU: "4",
        cant: "1",
        mtotal: "4",
    },
    
  ]);

    return (
        <main>
            <NavBar />    
            <div className="section-car bg-light ">
        <h1 className="text-dark">Carrito de compras</h1>
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