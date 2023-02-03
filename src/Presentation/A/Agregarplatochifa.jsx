import NavAg from "./NavAg";
import Navbar from "../NavbarUser";

function Agregarplatochifa(){return(
    <body>
        <Navbar/>
        <NavAg/>
        <section className="store">
    <div className="container">
        <div className="items">
            <div className="row">

                <div className="col-12 col-md-6">
                    <div className="item shadow mb-4">
                        <h3 className="item-title">Arroz chaufa</h3>
                        

                        <div className="item-details">
                            <h4 className="item-price">10€</h4>
                            <button className="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="item shadow mb-4">
                        <h3 className="item-title">saltado de verduras</h3>

                        <div className="item-details">
                            <h4 className="item-price">11€</h4>
                            <button className="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="item shadow mb-4">
                        <h3 className="item-title">Sopa oriental</h3>

                         <div className="item-details">
                            <h4 className="item-price">9€</h4>
                            <button className="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> </body>
)}
export default Agregarplatochifa