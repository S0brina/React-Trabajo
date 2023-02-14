import { useNavigate } from "react-router-dom"
import Navbar from "../NavbarUser"
import LoginForm from "./components/LoginForm"
import Log_Cli from "./Log_Cli.css"

function Login_Cliente() {

    const navigate = useNavigate()

    const loginHttp = async function(usuario, password) {
        const response = await fetch(
            "http://localhost:8000/endpoints/loginCliente",
            {
                method : "POST",
                body : JSON.stringify(
                    { 
                        usuario : usuario, 
                        password : password 
                    }
                )
            }
        )
        const data = await response.json()

        return data.error
    }

    const onLoginOk = async function(
        usuario, password
    ) {
        const error = await loginHttp(usuario, password)
        if (error === "") {
            // Login correcto
            const dataUsuario = {
                username : usuario,
                password : password
            }

            // JSON.stringify : convierte objetos js a JSON (string)
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            // Guardado en session storage
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/React-Trabajo/lista#", {
                state : {
                    username : usuario
                }
            })
        }else {
            console.error(error)
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