import { useNavigate } from "react-router-dom";

export default function HomeNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => {
            navigate("/home/");
          }}
          href="#"
        >
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className=" navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-dark"
                aria-current="page"
                onClick={() => {
                  navigate("/");
                }}
              >
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-dark"
                aria-current="page"
                onClick={() => {
                  navigate("/MostrarPedido");
                }}
              >
                Pedidos
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-dark"
                aria-current="page"
                onClick={() => {
                  navigate("/Registros");
                }}
              >
                Platos Agregados
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-dark"
                aria-current="page"
                onClick={() => {
                  navigate("/estadopedido");
                }}
              >
                Estado
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-dark"
                aria-current="page"
                onClick={() => {
                  navigate("/RegistrarPedido");
                }}
              >
                Registrar Cod
              </a>
            </li>


          </ul>
          <a
            onClick={() => {
              navigate("/loginRest");
            }}
            className="btn btn-outline-success mx-2"
            type="submit"
          >
            {" "}
            Inicio de Sesi??n{" "}
          </a>
          <a
            onClick={() => {
              navigate("/loginCliente");
            }}
            className="btn btn-outline-success"
            type="submit"
          >
            Para clientes
          </a>
        </div>
      </div>
    </nav>
  );
}