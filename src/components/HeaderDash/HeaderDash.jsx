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
    //empresa
    '/dashboard/empresa': `¡Bienvenid@ de nuevo ${nombre} ${apellido}!`,
    '/dashboard/projects': `¡Bienvenid@ de nuevo ${nombre} ${apellido}!`,
    '/dashboard/payments': "Facturación",
    '/dashboard/talents': "Personas",
    '/dashboard/projects/new': "Publicar Proyecto",
    '/dashboard/chat': "Mensajería",
    '/dashboard/editprofile': "Editar Perfil",
    //junior
    '/dashboard/junior': `¡Bienvenid@ de nuevo ${nombre} ${apellido}!`,
    '/dashboard/junior/applications': "Mis postulaciones",
    '/dashboard/junior/payments': "Pagos",
    '/dashboard/junior/opportunities': "Publicar servicio",
    '/dashboard/junior/find': "Buscar proyecto",
    '/dashboard/junior/chat': "Mensajería",
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
    <header className='headerDash container-fluid justify-content-center pe-4'>
      <Row className='w-100'>
        <Col xl={7} md={6}>
          <h3 className='fs-2'>{renderHeading}</h3>
        </Col>
        <Col xl={3} md={4} className='ms-auto d-flex p-xl-0 justify-content-xl-end py-2 px-0'>
          <Button type='border-0 button-profile-button mx-2 p-0'>
            <img src={profile} alt="Profile image" className='profile-button rounded-1' />
          </Button>
          <Button type="primary dash border-0 mx-2 align-self-center">
            <AiOutlineMail className='fs-4' />
          </Button>
          <Button type="primary dash border-0 mx-2 align-self-center">
            <FaRegBell className='fs-4' />
          </Button>
        </Col>
      </Row>
    </header>
  );
};

export default HeaderDash;
