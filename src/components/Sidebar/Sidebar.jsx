import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas, Container, Button, Col, Row } from 'react-bootstrap';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        {/* boton menu en md */}
        <Navbar expand="md" className="d-md-none px-0 justify-content-start">
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
            <Nav.Link href="#" className='ms-4'>TALENT PLACE</Nav.Link>
        </Navbar>

        {/* menu en md */}
        <Offcanvas show={show} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>MENU LEFT</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="flex-column">
                <Nav.Link href="#">Opcion 1</Nav.Link>
                <Nav.Link href="#">Opcion 2</Nav.Link>
                <Nav.Link href="#">Opcion 3</Nav.Link>
            </Nav>
            </Offcanvas.Body>
        </Offcanvas>

        {/* sidebar para lg */}
        <div className="d-none d-md-block" style={{ float: 'left', height: '100vh' }}>
            <Nav className="flex-column p-3">
            <Nav.Link href="#action1" className="link-light">Opcion 1</Nav.Link>
            <Nav.Link href="#action2" className="link-light">Opcion 2</Nav.Link>
            <Nav.Link href="#action3" className="link-light">Opcion 3</Nav.Link>
            </Nav>
        </div>
    </>
  );
};

export default Sidebar;
