import { useNavigate } from "react-router-dom"
import Navbar from "../NavbarUser"
import LoginForm from "./components/LoginRestForm"
import Log_Rest from "./Log_Rest.css"

function Login_Rest(){

    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ){
        if (usuario === "rest" 
            && password === "246") {

            const dataUsuario = {
                username : usuario,
                password : password
            }
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            console.log(dataUsuario)
            console.log(dataUsuarioJSON)
            // Guardado en session storage
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/main", {
                state : {
                    username : usuario
                }
            })
        }
    }


    return (
        <body>
            <Navbar />
            <div className="login">
            <div className="login-screenRest">
                <div className="app-title">
                    <h1>Inicio de Sesión</h1>
                </div>
                <LoginForm 
                onLoginOk={ onLoginOk } />
                </div>
            </div>
        </body>
    ) 
}

export default Login_Rest