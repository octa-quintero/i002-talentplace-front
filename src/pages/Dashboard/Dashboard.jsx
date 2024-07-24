import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./Dashboard.css"
import SidebarEmpresa from "../../components/Sidebar/SidebarEmpresa";
import SidebarFreelancer from "../../components/Sidebar/SidebarFreelancer";
import HeaderDash from "../../components/HeaderDash/HeaderDash";
import { useUserContext } from "../../context/UserProvider";

export const Dashboard = () => {

    const { user } = useUserContext();
    const recoverUser = JSON.parse(user);
    const rol = recoverUser.tipo;

    return(
        <main className="container-sidebar">
            <Container fluid className="d-flex">
                <Row className="min-vw-100">
                    <Col md={3} className="text position-md-fixed overflow-hidden menu-color">
                        {rol === "empresa" || rol === "admin" ? <SidebarEmpresa /> : <SidebarFreelancer />}
                        <img className="sidebar-bg1 d-none d-lg-flex" alt=" " />
                        <img className="sidebar-bg2 d-none d-lg-flex" alt=" " />
                    </Col>
                    <Col md={9} className="content min-vh-100 bg-white px-0">
                        {/* header */}
                        <div className="mt-md-5 mb-md-3">
                            <HeaderDash />
                        </div>
                        {/* body */}
                        <div className="overflow-scroll dashboard-container bg-white">
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}