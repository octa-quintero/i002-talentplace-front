import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import "./PaginaEnConstruccion.css";

export const PaginaEnConstruccion = () => {
  const navigate = useNavigate();

  const hideNavbar = () => {
    document.getElementById("navbar-dom").classList.add("d-none");
  };

  const showNavbar = () => {
    document.getElementById("navbar-dom").classList.remove("d-none");
  };

  const onClickBack = () => {
    navigate(-1);
    showNavbar();
  };

  const onClickHome = () => {
    navigate("/home");
    showNavbar();
  };

  useEffect(() => {
    hideNavbar();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <button className="btn-custom" onClick={() => onClickBack()}>
            <BiArrowBack size={"1em"} />
          </button>
          <button className="btn-custom" onClick={() => onClickHome()}>
            <AiOutlineHome size={"1em"} />
          </button>
        </Col>
      </Row>
      <Row className="my-5 py-5">
        <Col xs={12} className="text-center">
          <h1 className="title">Página en Construcción</h1>
          <FaTools size={"6em"} color={"#8C52FF"} />
          <p className="text mt-4 mb-0">
            Estamos trabajando arduamente para traerte una experiencia mejorada.
            Vuelve pronto para ver las novedades.
          </p>
          <p className="text">¡Gracias por tu paciencia!</p>
        </Col>
      </Row>
    </Container>
  );
};
