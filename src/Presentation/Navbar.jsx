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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link active"
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
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigate("/");
                }}
              >
                Restaurantes
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigate("/");
                }}
              >
                Promociones
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigate("/");
                }}
              >
                Para Restaurantes
              </a>
            </li>

          </ul>
          <a
            onClick={() => {
              navigate("/home/login");
            }}
            className="btn btn-outline-success mx-2"
            type="submit"
          >
            {" "}
            Inicio de Sesión{" "}
          </a>
          <a
            onClick={() => {
              navigate("/home/selectregister");
            }}
            className="btn btn-outline-success"
            type="submit"
          >
            Carrito de compras
          </a>
        </div>
      </div>
    </nav>
  );
}