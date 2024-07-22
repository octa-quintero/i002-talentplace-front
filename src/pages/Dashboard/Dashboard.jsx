import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./Dashboard.css"
import Sidebar from "../../components/Sidebar/Sidebar";

export const Dashboard = () => {
    return(
        <main className="container-sidebar bg-white">
            <Container fluid className="d-flex">
                <Row className="min-vw-100">
                    <Col md={3} className="d-md-block bg-success">
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        {/* header */}
                        <div className="bg-info">
                            <h2>Menu Header</h2>
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