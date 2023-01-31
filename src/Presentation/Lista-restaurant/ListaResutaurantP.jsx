import Navbar from "../Navbar"
import i1 from "./imagenes1/img1.png "
import i2 from "./imagenes1/img2.png "
import i3 from "./imagenes1/img3.png"
import i4 from "./imagenes1/img4.png"
import i5 from "./imagenes1/img13.png"
import i6 from "./imagenes1/img14.png" 
import i7 from "./imagenes1/img12.png"

function ListaRestaurantP(){
    return (
    <body> <Navbar/>
    <h1 class="h">Lista Restaurant</h1>
    
	<div class="contentlist">   		
        <h2>Pizzas</h2>
           
           <div class="layerlist" id="c">
               <h3>01</h3>
               <div class="restaurant">
                   <h4>Marco's Bistro</h4>
                   <h5></h5>
               </div>
               <img class="i" src={i7} alt="imageAlbum"/>
               <div class="optionslist">
                   <img class="d" src={i1} alt="download"/>
                   <img class="d" src={i2} alt="heart"/>
                   <img class="d" src={i3} alt="share"/>
                   <img class="d" src={i4} alt="dots"/>
               </div>
           </div>
           <div class="layerlist" id="c">
               <h3>01</h3>
               <div class="restaurant">
                   <h4>Papa Jhons</h4>
                   <h5></h5>
               </div>
               <img class="i" src={i7} alt="imageAlbum"/>
               <div class="optionslist">
                   <img class="d" src={i1} alt="download"/>
                   <img class="d" src={i2} alt="heart"/>
                   <img class="d" src={i3} alt="share"/>
                   <img class="d" src={i4} alt="dots"/>
               </div>
           </div>
           <div class="layerlist" id="c">
               <h3>01</h3>
               <div class="restaurant">
                   <h4>Pizza hat</h4>
                   <h5></h5>
               </div>
               <img class="i" src={i7} alt="imageAlbum"/>
               <div class="optionslist">
                   <img class="d" src={i1} alt="download"/>
                   <img class="d" src={i2} alt="heart"/>
                   <img class="d" src={i3} alt="share"/>
                   <img class="d" src={i4} alt="dots"/>
               </div>
           </div>
           </div>
       </body> )
} export default ListaRestaurantP