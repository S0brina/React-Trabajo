import { useState } from "react"

export default function LoginForm(props) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = () => {
        props.loginHttp(usuario,password)
    }

    return <form>
        <div className="formulario">
            <div className="control-group">
                <input type="text" id="login-name" placeholder="Nombre de usuario"
                value={ usuario }
                onChange={ (evt) => setUsuario(evt.target.value) }></input>
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
}