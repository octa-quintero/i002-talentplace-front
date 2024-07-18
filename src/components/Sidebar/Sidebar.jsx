import React from "react";
import './Sidebar.css';
import { NavLink } from "react-router-dom";

/*  IMAGES & LOGOS  */
import TalentplaceLogo from '../../assets/assets-png/2.png';
import { LuTable2 } from "react-icons/lu";
import { AiOutlineProject } from "react-icons/ai";
import { PiMoneyWavy } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { MdOutlineUpload } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Sidebar = () => {
    return(
        <div className="sidebar-container">

            <div className="sidebar-top">
                <img className="sidebar-top-logo" src={TalentplaceLogo} alt="Logo"></img>
                <p className="sidebar-top-username">Username</p>
                <p className="sidebar-top-usermail">username@test.com</p>
            </div>

            <div className="sidebar-menu">
                <div className="sidebar-menu-row">
                    <div className="sidebar-menu-icon">
                        <LuTable2 size={30} />    
                    </div>
                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? "active" : ""}`
                        }
                        to="/dashboard"
                        >
                        <h4>Dashboard</h4>
                    </NavLink>
                </div>

                <div className="sidebar-menu-row">
                    <div className="sidebar-menu-icon">
                        <AiOutlineProject size={30} />    
                    </div>
                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? "active" : ""}`
                        }
                        to="/projects"
                        >
                        <h4>Proyectos</h4>
                    </NavLink>
                </div>

                <div className="sidebar-menu-row">
                    <div className="sidebar-menu-icon">
                        <PiMoneyWavy size={30} />    
                    </div>
                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? "active" : ""}`
                        }
                        to="/factures"
                        >
                        <h4>Facturacion</h4>
                    </NavLink>
                </div>

                <div className="sidebar-menu-row">
                    <div className="sidebar-menu-icon">
                        <GoPeople size={30} />    
                    </div>
                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? "active" : ""}`
                        }
                        to="/people"
                        >
                        <h4>Personas</h4>
                    </NavLink>
                </div>

                <div className="sidebar-menu-row">
                    <div className="sidebar-menu-icon">
                        <MdOutlineUpload size={30} />    
                    </div>
                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? "active" : ""}`
                        }
                        to="/projects"
                        >
                        <h4>Publicar proyectos</h4>
                    </NavLink>
                </div>

            </div>

            <div className="sidebar-options">
                <div className="sidebar-options-row">
                    <div className="sidebar-options-icon">
                        <BsChatDots size={30} />    
                    </div>
                    <NavLink
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? "active" : ""}`
                        }
                        to="/chat"
                        >  
                        <h5>Chat</h5>
                    </NavLink>
                    </div>

                    <div className="sidebar-options-row">
                        <div className="sidebar-options-icon">
                            <IoSettingsOutline size={30} />    
                        </div>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-item nav-link ${isActive ? "active" : ""}`
                            }
                            to="/settings"
                            >
                            <h5>Configuración</h5>
                        </NavLink>
                        
                    </div>

                    <div className="sidebar-options-row">
                        <div className="sidebar-options-icon">
                            <RiLogoutCircleRLine size={30} />    
                        </div>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-item nav-link ${isActive ? "active" : ""}`
                            }
                            to="/logout"
                            >
                            <h5>Salir</h5>
                        </NavLink>
                    </div>
            </div>
        </div>
    );
};

export default Sidebar;