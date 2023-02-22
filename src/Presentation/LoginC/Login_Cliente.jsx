import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../NavbarUser"
import Log_Cli from "./Log_Cli.css"

const Login_Cliente = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const butOnClick = async (evt) =>{
        evt.preventDefault();

        try{
            const response = await fetch("http://localhost:8000/endpoints/loginCliente",{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username:username,
                    password:password
                })
            });
            const data = await response.json();
            console.log(data)
            if(data.error===""){
                const jsonData = JSON.stringify(data.cliente)
                sessionStorage.setItem('data',jsonData)
                window.location.href='/lista'
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
            <div className="login-screen">
                <div className="app-title">
                    <h1>Inicio de Sesión</h1>
                </div>
                <form>
        <div className="formulario">
            <div className="control-group">
                <input type="text" id="login-name" placeholder="Nombre de usuario"
                value={ username }
                onChange={ (evt) => setUsername(evt.target.value) }></input>
            </div>
            <div className="control-group">
                <input type="password" id="login-pass" placeholder="Contraseña"
                value={ password }
                onChange={ (evt) => setPassword(evt.target.value) }></input>
            </div>
        </div>
        
        <button className="btn btn-outline-success" type="button"
            onClick={ butOnClick }>
            Login
        </button>
        <a className="password-link" href="#">¿Olvidaste tu contraseña?</a>
    </form>
                

                </div>
            </div>
        </body>
    )  
};
export default Login_Cliente;