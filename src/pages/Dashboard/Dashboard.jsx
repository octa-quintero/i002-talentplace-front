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
                    <Col md={3} className="sidebar bg-dark text-white vh-100">
                        {rol === "empresa" || rol === "admin" ? <SidebarEmpresa /> : <SidebarFreelancer />}
                    </Col>
                    <Col md={9} className="content flex-grow-1">
                        {/* header */}
                        <div>
                            <HeaderDash />
                        </div>
                        {/* body */}
                        <div className="overflow-scroll dashboard-container">
                            <Outlet />
                        </div>
                    </Col>
            </Container>
        </main>
    );
}