import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="src/assets/assets-png/2.png" alt="imagen logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto justify-content-center" >
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/contratar"
            >
              Contratar
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/opportunities"
            >
              Opportunities

            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/contacto"
            >
              Contactanos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to="/nosotros"
            >
              Nosotros
            </NavLink>
          </div>
          <div>
            <NavLink  to="/login">
              <btn className="btn btn-primary" type="button">Ingresar</btn>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
