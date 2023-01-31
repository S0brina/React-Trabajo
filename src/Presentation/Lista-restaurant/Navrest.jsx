import { useNavigate } from "react-router-dom";

function Navrest() {
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
          MedicApp
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigate("/ListMA");
                }}
              >
                Mariscos
              </a>
            </li>
            </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigate("/ListC");
                }}
              >
                Chifa
              </a>
            </li>
            </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link active"
                aria-current="page"
                onClick={() => {
                  navigate("/ListP");
                }}
              >
                Pizzas
              </a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        )}
        export default Navrest