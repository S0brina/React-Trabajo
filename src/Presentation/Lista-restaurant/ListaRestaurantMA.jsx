import Navbar from "../NavbarUser"
import i1 from "../imagenes1/img1.png"
import i2 from "../imagenes1/img2.png"
import i3 from "../imagenes1/img3.png"
import i4 from "../imagenes1/img4.png"
import i5 from "../imagenes1/img13.png"
import i6 from "../imagenes1/img14.png" 
import i7 from "../imagenes1/img12.png"
import Navrest from "./Navrest"

function ListaRestaurantMA(){
    return (
    <body> <Navbar/>
    <Navrest/>
    <h1 className="h">Lista Restaurant</h1>
    
	<div className="contentlist">   
         <h2>Mariscos</h2>
	 <div className="layerlist">
			<h3></h3>
			<div className="restaurant">
				<h4>Mi barrunto</h4>
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
		<div className="layerlist" id="c">
			<h3></h3>
			<div className="restaurant">
				<h4>La choza nautica</h4>
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
           <div className="layerlist" id="c">
               <h3></h3>
               <div className="restaurant">
                   <h4>Yamakawa</h4>
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
		   <div className="layerlist" id="c">
               <h3></h3>
               <div className="restaurant">
                   <h4>Richards</h4>
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
		   <div className="layerlist" id="c">
               <h3></h3>
               <div className="restaurant">
                   <h4>Tio lenguado</h4>
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
       </body> )
} export default ListaRestaurantMA