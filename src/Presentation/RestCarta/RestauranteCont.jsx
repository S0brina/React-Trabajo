import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Categorias from "./components/Categorias"

function RestauranteCont(){
    const listaBebidas=[
        {
            imagen: "https://plazavea.vteximg.com.br/arquivos/ids/1538987-220-220/26887.jpg?v=637548077932200000" ,
            nombre: "Pizza Americana Familiar",
            descripcion: "Pizza Americana Familiar, 8 slides",
            precio: "S/ 50.00",
        }
    ]
    
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(function() {
        if(location.state == null){
            navigate("/login")
        }
    },[])

    return location.state != null
    ?   <body>
        <Navbar />
        <div className="container-categoria">
            <div className="container text-center">
                <div className="titulo-seccion">
                <h1>Pizzas</h1>
            </div>
                <Categorias/>
            </div>
        </div>
        </body>
    :<div></div>

}

export default RestauranteCont