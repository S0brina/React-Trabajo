import { useNavigate } from "react-router-dom"
import Navbar from "../NavBarRest"
import LoginForm from "./components/LoginRestForm"
import Log_Rest from "./Log_Rest.css"
import { Alert } from "bootstrap"

function Login_Rest(){

    const navigate = useNavigate()

    const loginHttp = async function(usuario, password) {
        const response = await fetch(
            "http://localhost:8000/endpoints/loginRestaurante",
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
    ){
        const error = await loginHttp(usuario, password)
        if (error === "") {
            // Login correcto
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
        }else {
            console.error(error)
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
                onLoginOk={ onLoginOk} />
                </div>
            </div>
        </body>
    ) 
}

export default Login_Rest