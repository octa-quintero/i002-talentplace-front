import { Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer py-4 container-fluid bg-white">
      <Row className="px-lg-5"> 
          <Col xs={12} lg={6} className="footer-background footer-background-left">
            <Row className="mt-lg-5">
              <Col xs={12} lg={4}>
                <p className="footer-subtitle">Categorias</p>
                <ul className="list-group">
                  <li>
                    <a href="#!">It y Programación</a>
                  </li>
                  <li>
                    <a href="#!">Administración y Soporte</a>
                  </li>
                  <li>
                    <a href="#!">Diseño y Multimedia</a>
                  </li>
                  <li>
                    <a href="#!">Redacción y Traducción</a>
                  </li>
                  <li>
                    <a href="#!">Gestión y Finanzas</a>
                  </li>
                  <li>
                    <a href="#!">Ingeniería y Fabricación</a>
                  </li>
                  <li>
                    <a href="#!">Ventas y Marketing</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} lg={4}>
                <p className="footer-subtitle">Comunidad</p>
                <ul className="list-group">
                  <li>
                    <a href="#!">Nosotros</a>
                  </li>
                  <li>
                    <a href="#!">Contactanos</a>
                  </li>
                  <li>
                    <a href="#!">Aprende a contratar</a>
                  </li>
                  <li>
                    <a href="#!">Aprende a trabajar</a>
                  </li>
                  <li>
                    <a href="#!">Ayuda y soporte</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} lg={4}>
                <p className="footer-subtitle">Informacion</p>
                <ul className="list-group">
                  <li>
                    <a href="#!">Cargos y tarifas</a>
                  </li>
                  <li>
                    <a href="#!">Membresia</a>
                  </li>
                  <li>
                    <a href="#!">Politica de privacidad</a>
                  </li>
                  <li>
                    <a href="#!">Mapa del sitio</a>
                  </li>
                  <li>
                    <a href="#!">Accesibilidad</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="footer-background footer-background-right">
            <Row className="mt-lg-5">
              <Col xs={12} lg={{ span: 6, offset: 6 }} className="text-center">  
                <p className="footer-subtitle">¡Seguinos en nuetras redes!</p>
                <ul className="list-inline">
                  <li className="list-inline-item footer-social-icon">
                    <a href="#!" target="_blank">
                      <FaLinkedin size={"2em"} />
                    </a>
                  </li>
                  <li className="list-inline-item footer-social-icon">
                    <a href="#!">
                      <FiYoutube size={"2em"} value={{ color: "red" }} />
                    </a>
                  </li>
                  <li className="list-inline-item footer-social-icon">
                    <a href="#!">
                      <FaInstagram size={"2em"} />
                    </a>
                  </li>
                </ul>
                <div className="mt-5">
                  <img
                    src="src/assets/assets-png/2.png"
                    alt="talentplace-icon"
                    width={100}
                    height={80}
                  />
                  <p className="footer-copyright">© Copyright 2024 - TalentPlace</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
    </footer>
  );
};
