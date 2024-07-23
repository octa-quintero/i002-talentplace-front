import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./Dashboard.css"
import SidebarEmpresa from "../../components/Sidebar/SidebarEmpresa";
import SidebarFreelancer from "../../components/Sidebar/SidebarFreelancer";
import HeaderDash from "../../components/HeaderDash/HeaderDash";

export const Dashboard = () => {
    return(
        <main className="container-sidebar">
            <Container fluid className="d-flex">
                <Row className="min-vw-100">

                    <Col md={3} className="d-md-block">
                        <SidebarEmpresa />
                    </Col>
                    {/* <Col md={3} className="d-md-block">
                        <SidebarFreelancer />
                    </Col> */}
                    <Col md={9} className="bg-white">
                        {/* header */}
                        <div>
                            <HeaderDash />
                        </div>
                        {/* body */}
                        <div className="vh-100 overflow-scroll dashboard-container">
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}