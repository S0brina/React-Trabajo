import { useNavigate } from "react-router-dom"
import Navbar from "../NavbarUser"
import LoginForm from "./components/LoginForm"
import Log_Cli from "./Log_Cli.css"

function Login_Cliente() {

    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ) {
        if (usuario === "pw" 
            && password === "123") {

            const dataUsuario = {
                username : usuario,
                password : password
            }

            // JSON.stringify : convierte objetos js a JSON (string)
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
            <div className="login-screen">
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

export default Login_Cliente