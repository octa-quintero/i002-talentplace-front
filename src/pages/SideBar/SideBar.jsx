import { Container } from "react-bootstrap";
import { Projects } from "../Projects/Projects";

export const SideBar = () => {
    return(
        <main className="container-sidebar">
            <Container fluid className="d-flex">
                {/* sidebar Left */}
                <div className="w-25 bg-success" style={{ height: '800px' }}>
                    <h3>Menu left</h3>
                </div>
                {/* main */}
                <div className="w-75 bg-light p-3">
                    {/* header */}
                    <div className="bg-info">
                        <h2>Menu Header</h2>
                    </div>
                    {/* body */}
                    <div>
                        <Projects />
                    </div>
                </div>
            </Container>
        </main>
    );
}