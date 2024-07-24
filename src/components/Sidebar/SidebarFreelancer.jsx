import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Offcanvas } from "react-bootstrap";
import './Sidebar.css';

/*  Images & Logos  */
import TalentplaceLogo from '../../assets/assets-png/2.png';
import { LuTable2 } from "react-icons/lu";
import { AiOutlineProject } from "react-icons/ai";
import { PiMoneyWavy } from "react-icons/pi";
import { MdOutlineUpload } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { useUserContext } from "../../context/UserProvider";

const SidebarFreelancer = () => {

    const { user } = useUserContext();
    const recoverUser = JSON.parse(user);

    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (

        <Container fluid className="dashboard-container d-flex">

            <div className="sidebar-container w-100 d-flex justify-content-center align-items-around">

                <div className="sidebar-button">
                    {isMobile && (
                        <CiMenuBurger size={30} variant="primary" onClick={handleShow} className="d-lg-none my-3" />
                    )}
                </div>

                <Offcanvas show={show} onHide={handleClose} responsive="lg" className="d-flex flex-column p-3 justify-content-around align-items-center">

                    <div className="sidebar-top d-flex flex-column align-items-center">
                        <img className="sidebar-top-logo" src={TalentplaceLogo} alt="Logo"></img>
                        <h5 className="sidebar-top-username">{recoverUser.nombre}</h5>
                        <p className="sidebar-top-usermail">{recoverUser.email}</p>
                    </div>


                    <div className="sidebar-menu d-flex flex-column justify-content-around">
                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <LuTable2 size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/junior"
                            >
                                <h4>Dashboard</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <AiOutlineProject size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/junior/proyectos"
                            >
                                <h4>Mis proyectos</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <PiMoneyWavy size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/junior/payments"
                            >
                                <h4>Pagos</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <MdOutlineUpload size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/junior/opportunities"
                            >
                                <h4>Publicar servicio</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <IoSearch size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/junior/find"
                            >
                                <h4>Buscar Proyecto</h4>
                            </NavLink>
                        </div>

                    </div>


                    <div className="sidebar-options d-flex flex-column justify-content-around">
                        <div className="sidebar-options-row d-flex justify-content-start">
                            <div className="sidebar-options-icon">
                                <BsChatDots size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/junior/chat"
                            >
                                <h4>Chat</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-options-row d-flex justify-content-start">
                            <div className="sidebar-options-icon">
                                <GoPerson size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/editprofile"
                            >
                                <h4>Perfil</h4>
                            </NavLink>

                        </div>

                        <div className="sidebar-options-row d-flex justify-content-start">
                            <div className="sidebar-options-icon">
                                <RiLogoutCircleRLine size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/logout"
                            >
                                <h4>Salir</h4>
                            </NavLink>
                        </div>

                    </div>

                </Offcanvas>

            </div>

        </Container>
    );
};

export default SidebarFreelancer;