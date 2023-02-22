import { useState } from "react"
import Navbar from "../NavBarRest"
import LoginForm from "./components/LoginRestForm"
import Log_Rest from "./Log_Rest.css"

function Login_Rest(){
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const butOnClick = async (evt) =>{
        evt.preventDefault();

        try{
            const response = await fetch(
                "http://localhost:8000/endpoints/loginRestaurante",{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    usuario:usuario,
                    password:password
                })
            });
            const data = await response.json();
            console.log(data)
            if(data.error===""){
                const jsonData = JSON.stringify(data.restaurante)
                sessionStorage.setItem('data',jsonData)
            }
            else{
                setError("Cuenta no existe")
            }
        }catch(error2){
            console.log("error")
            setError(error2.message)
        }
    };



    return (
        <body>
            <Navbar />
            <div className="login">
            <div className="login-screenRest">
                <div className="app-title">
                    <h1>Inicio de Sesión</h1>
                </div>
                <form>
        <div className="formulario">
            <div className="control-group">
                <input type="text" id="login-name" placeholder="Nombre de usuario"
                value={ usuario }
                onChange={ function(evt) { setUsuario(evt.target.value) } }></input>
            </div>
            <div className="control-group">
                <input type="password" id="login-pass" placeholder="Contraseña"
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } }></input>
            </div>
        </div>        
        <button className="btn" type="button"
            onClick={ butOnClick }>
            Login
        </button>
        <a className="password-link" href="#">¿Olvidaste tu contraseña?</a>
    </form>
                </div>
            </div>
        </body>
    ) 
}

export default Login_Rest