import { useNavigate } from "react-router-dom"

function Login_Rest(){

    const navigate = useNavigate()




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