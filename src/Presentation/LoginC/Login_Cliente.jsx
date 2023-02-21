import { useNavigate } from "react-router-dom"
import Navbar from "../NavbarUser"
import LoginForm from "./components/LoginForm"

export default function Login_Cliente(props) {

    const navigate = useNavigate()

    const loginHttp = async (username, password) => {
        if (username !== "" && password !== ""){    
            const response = await fetch(
                "http://localhost:8000/endpoints/loginCliente",
                {
                    method : "POST",
                    body : JSON.stringify(
                        { 
                            username : username, 
                            password : password 
                        }
                    )
                }
            )
            const data = await response.json()
            if (data.error ==""){
                const dataCliente = {
                    clienteID : data.cliente_id
                }

                const dataClienteJSON = JSON.stringify(dataCliente)
                sessionStorage.setItem("DATA_CLIENTE", dataClienteJSON)
                console.log(`Cliente logeado: ${data.cliente_id}`)
            }else{
                console.error(data.error)
            }
        }
        navigate("/")
       
    }

    return (
        <body>
            <Navbar />
            <div className="login">
            <div className="login-screen">
                <div className="app-title">
                    <h1>Inicio de Sesión</h1>
                </div>
                <LoginForm 
                loginHttp={ loginHttp } />
                </div>
            </div>
        </body>
    )  
}