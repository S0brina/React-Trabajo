import Navbar from "../NavbarUser";
import i1 from "../imagenes1/img1.png"
import i2 from "../imagenes1/img2.png"
import i3 from "../imagenes1/img3.png"
import i4 from "../imagenes1/img4.png"
import i5 from "../imagenes1/img13.png"
import i6 from "../imagenes1/img14.png" 
import i7 from "../imagenes1/img12.png"
function Ranking(){
    return (
        <body>
        <Navbar/>   
        <h1 className="h">Ranking Restaurant con mas clientes</h1>
        <div className="contentlist">
         <div className="layerlist">
                <h2></h2>
                <div className="restaurant">
                    <h4>1.ChifaABC</h4>
                    <h5></h5>
                </div>
                <img className="i" src={i6} alt="imageAlbum"/>
                <div className="optionslist">
                    <img className="d" src={i1} alt="download"/>
                    <img className="d" src={i2} alt="heart"/>
                    <img className="d" src={i3} alt="share"/>
                    <img className="d" src={i4} alt="dots"/>
                </div>
            </div>
            <div className="layerlist">
                <h2>02</h2>
                <div className="restaurant">
                    <h4>2.ChifaXYZ</h4>
                    <h5></h5>
                </div>
                <img className="i" src={i5} alt="imageAlbum"/>
                <div className="optionslist">
                    <img className="d" src={i1} alt="download"/>
                    <img className="d" src={i2} alt="heart"/>
                    <img className="d" src={i3} alt="share"/>
                    <img className="d" src={i4} alt="dots"/>
                </div>
            </div>
            <div className="layerlist">
                <h2></h2>
                <div className="restaurant">
                    <h4>3.marcos bistro</h4>
                    <h5></h5>
                </div>
                <img className="i" src={i7} alt="imageAlbum"/>
                <div className="optionslist">
                    <img className="d" src={i1} alt="download"/>
                    <img className="d" src={i2} alt="heart"/>
                    <img className="d" src={i3} alt="share"/>
                    <img className="d" src={i4} alt="dots"/>
                </div>
            </div>
        </div>
    </body>
    )
} export default Ranking