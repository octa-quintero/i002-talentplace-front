import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "./HeaderDash.css";
import Button from '../Button/Button';
import profile from '../../assets/assets-img/man-profile.jpeg';
import { useUserContext } from '../../context/UserProvider';
import { matchPath, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";

const HeaderDash = () => {

  const location = useLocation();
  const pathLocal = location.pathname;

  const { user } = useUserContext();
  const recoverUser = JSON.parse(user);

  const { nombre, apellido } = recoverUser;

  const headings = {
    '/dashboard': `¡Bienvenido de nuevo ${nombre} ${apellido}!`,
    '/dashboard/projects': "Proyectos",
    '/dashboard/payments': "Facturación",
    '/dashboard/talents': "Personas",
    '/dashboard/projects/new': "Publicar Proyecto",
    '/dashboard/chat': "Mensajería",
    '/dashboard/profile': "Editar Perfil"
  };

  const renderHeading = useMemo(() => {
    if (headings[pathLocal]) {
      return headings[pathLocal];
    } else if (matchPath('/dashboard/projects/edit/:id', pathLocal)) {
      return "Editar Proyecto";
    }
    return "";
  }, [pathLocal, headings]);

  return (
    <header className='headerDash container-fluid mt-5 mb-xl-3 justify-content-center'>
      <Row className='w-100'>
        <Col xl={7} md={6}>
          <h3 className='fs-2'>{renderHeading}</h3>
        </Col>
        <Col xl={3} md={4} className='ms-auto d-flex p-xl-0 justify-content-xl-end py-2 px-0'>
          <Button type='dash user border-0 button-profile-button mx-2'>
            <img src={profile} alt="Profile image" className='profile-button' />
          </Button>
          <Button type="primary dash border-0 mx-2">
            <AiOutlineMail className='fs-4' />
          </Button>
          <Button type="primary dash border-0 mx-2">
            <FaRegBell className='fs-4' />
          </Button>
        </Col>
      </Row>
    </header>
  );
};

export default HeaderDash;
