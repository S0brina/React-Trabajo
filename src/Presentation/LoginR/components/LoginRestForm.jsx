import { useState } from "react"

function LoginForm(props) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function() {
        console.log("USuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)
    }
    

    return <form>
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
}

export default LoginForm