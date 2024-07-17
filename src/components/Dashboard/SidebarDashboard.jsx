import React from "react";
import './SidebarDashboard.css';

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

const SidebarDashboard = () => {
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
                    <h4>Dasboard</h4>
                </div>

                <div className="sidebar-menu-row">
                    <div className="sidebar-menu-icon">
                        <AiOutlineProject size={30} />    
                    </div>
                    <h4>Proyectos</h4>
                </div>

                <div className="sidebar-menu-row">
                    <div className="sidebar-menu-icon">
                        <PiMoneyWavy size={30} />    
                    </div>
                    <h4>Facturacion</h4>
                </div>

                <div className="sidebar-menu-row">
                    <div className="sidebar-menu-icon">
                        <GoPeople size={30} />    
                    </div>
                    <h4>Personas</h4>
                </div>

                <div className="sidebar-menu-row">
                    <div className="sidebar-menu-icon">
                        <MdOutlineUpload size={30} />    
                    </div>
                    <h4>Publicar proyecto</h4>
                </div>

            </div>

            <div className="sidebar-options">
                <div className="sidebar-options-row">
                    <div className="sidebar-options-icon">
                        <BsChatDots size={30} />    
                    </div>
                    <h5>Chat</h5>
                    </div>

                    <div className="sidebar-options-row">
                        <div className="sidebar-options-icon">
                            <IoSettingsOutline size={30} />    
                        </div>
                        <h5>Configuración</h5>
                    </div>

                    <div className="sidebar-options-row">
                        <div className="sidebar-options-icon">
                            <RiLogoutCircleRLine size={30} />    
                        </div>
                        <h5>Salir</h5>
                    </div>
            </div>
        </div>
    );
};

export default SidebarDashboard;