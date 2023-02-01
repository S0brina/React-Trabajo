import NavAg from "./NavAg";
import Navbar from "../Navbar";

function Agregarplatopizza(){
    return (<body>
    <Navbar/>
    <NavAg/> 
    <section className="store">
    <div className="container">
        <div className="items">
            <div className="row">

                <div className="col-12 col-md-6">
                    <div className="item shadow mb-4">
                        <h3 className="item-title">Pizza americana</h3>
                        

                        <div className="item-details">
                            <h4 className="item-price">10€</h4>
                            <button className="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="item shadow mb-4">
                        <h3 className="item-title">pizza hawaiana</h3>

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
                        <h3 className="item-title">lasagna</h3>

                         <div className="item-details">
                            <h4 className="item-price">9€</h4>
                            <button className="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></body>)
}
export default Agregarplatopizza