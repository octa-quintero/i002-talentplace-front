import { Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/assets-png/2.png"
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer py-4 container-fluid bg-white" id="footer-dom">
      <Row className="px-lg-5">
        <Col
          xs={12}
          lg={6}
          className="footer-background footer-background-left"
        >
          <Row className="mt-lg-5">
            <Col
              xs={12}
              lg={4}
              className="d-flex flex-column align-items-center align-items-lg-start"
            >
              <p className="footer-subtitle mt-4 mt-lg-0">Categorias</p>
              <ul className="list-group align-items-center align-items-lg-start">
                <li>
                  <NavLink to="/opportunities">It y Programación</NavLink>
                </li>
                <li>
                  <NavLink to="/opportunities">Administración y Soporte</NavLink>
                </li>
                <li>
                  <NavLink to="/opportunities">Diseño y Multimedia</NavLink>
                </li>
                <li>
                  <NavLink to="/opportunities">Redacción y Traducción</NavLink>
                </li>
                <li>
                  <NavLink to="/opportunities">Gestión y Finanzas</NavLink>
                </li>
                <li>
                  <NavLink to="/opportunities">
                    Ingeniería y Fabricación
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/opportunities">Ventas y Marketing</NavLink>
                </li>
              </ul>
            </Col>
            <Col
              xs={12}
              lg={4}
              className="d-flex flex-column align-items-center align-items-lg-start"
            >
              <p className="footer-subtitle mt-4 mt-lg-0">Comunidad</p>
              <ul className="list-group align-items-center align-items-lg-start">
                <li>
                  <NavLink to="/nosotros">Nosotros</NavLink>
                </li>
                <li>
                  <NavLink to="/contacto">Contactanos</NavLink>
                </li>
                <li>
                  <NavLink to="/paginaenconstruccion">Aprende a contratar</NavLink>
                </li>
                <li>
                  <NavLink to="/paginaenconstruccion">Aprende a trabajar</NavLink>
                </li>
                <li>
                  <NavLink to="/paginaenconstruccion">Ayuda y soporte</NavLink>
                </li>
              </ul>
            </Col>
            <Col
              xs={12}
              lg={4}
              className="d-flex flex-column align-items-center align-items-lg-start"
            >
              <p className="footer-subtitle mt-4 mt-lg-0">Informacion</p>
              <ul className="list-group align-items-center align-items-lg-start">
                <li>
                  <NavLink to="/paginaenconstruccion">Cargos y tarifas</NavLink>
                </li>
                <li>
                  <NavLink to="/paginaenconstruccion">Membresia</NavLink>
                </li>
                <li>
                  <NavLink to="/paginaenconstruccion">Politica de privacidad</NavLink>
                </li>
                <li>
                  <NavLink to="/paginaenconstruccion">Mapa del sitio</NavLink>
                </li>
                <li>
                  <NavLink to="/paginaenconstruccion">Accesibilidad</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="footer-background footer-background-right"
        >
          <Row className="mt-lg-5">
            <Col xs={12} lg={{ span: 6, offset: 6 }} className="text-center z-1">
              <p className="footer-subtitle mt-4 mt-lg-0">
                ¡Seguinos en nuetras redes!
              </p>
              <ul className="list-inline">
                <li className="list-inline-item footer-social-icon">
                  <a href="https://www.linkedin.com/" target="_blank">
                    <FaLinkedin size={"2em"} />
                  </a>
                </li>
                <li className="list-inline-item footer-social-icon">
                  <a href="https://www.youtube.com/" target="_blank">
                    <FiYoutube size={"2em"} value={{ color: "red" }} />
                  </a>
                </li>
                <li className="list-inline-item footer-social-icon">
                  <a href="https://www.instagram.com/" target="_blank">
                    <FaInstagram size={"2em"} />
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <img
                  src={logo}
                  alt="talentplace-icon"
                  width={100}
                  height={80}
                />
                <p className="footer-copyright">
                  © Copyright 2024 - TalentPlace
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};
