import { Card, Col, Row } from "react-bootstrap"
import formatDateLocal from "../../utils/formatDateLocal";
import { useAllProjectsByUserId } from "../../hooks/useAllProjectsByUserId";
import Loading from "../../pages/shared/Loading";


export const DashboardEmpresa = () => {

    const { projects, loading } = useAllProjectsByUserId();

    const stateProjectParse = (boolean) => {
        return boolean ? "Vigente" : "No vigente";
    }

    const firstToUpperCase = (modalidad) => {
        const firstLetter = modalidad.charAt(0).toUpperCase();
        const restText = modalidad.slice(1);
        return firstLetter + restText;
    }

    let pagosEfectuados = "$ARS 0";

    return (
        <>
            {loading ? (
                <div className="loading"><Loading /></div>
            ) :

                <div className="p-3 my-5">

                    {projects.map((project) => (
                        <Card key={project.id} className="align-items-start m-3">
                            <h3 className='p-3 fs-2'>Último proyecto vigente</h3>
                            <Card.Body className="p-3">
                                <Row>
                                    <Card.Title className="fw-bold">Proyecto:</Card.Title>
                                    <Card.Text>{project.titulo}</Card.Text>
                                </Row>

                                <Row className="pt-4">
                                    <Col lg={4}>
                                        <Card.Title className="fw-bold">Pagos efectuados</Card.Title>
                                        <Card.Text>{formatDateLocal(project.fechaCreacion)} <strong>{pagosEfectuados}</strong></Card.Text>
                                    </Col>
                                    <Col lg={4}>
                                        <Card.Title className="fw-bold">Estado:</Card.Title>
                                        <Card.Text>{stateProjectParse(project.estado)}</Card.Text>
                                    </Col>
                                    <Col lg={4}>
                                        <Card.Title className="fw-bold">Total hasta el momento:</Card.Title>
                                        <Card.Text>{projects.length}</Card.Text>
                                    </Col>

                                    <Row className="pt-4">

                                        <Col lg={3}>
                                            <Row className="text-center px-1">
                                                <Col className="p-0 m-1">
                                                    <Card.Title className="fw-bold p-1 m-1 text-end">
                                                        Modalidad:
                                                    </Card.Title>
                                                </Col>
                                                <Col className="p-0 m-1 rounded-4">
                                                    <Card.Text className="p-1 m-1 text-start">
                                                        {firstToUpperCase(project.modalidad)}
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={3}>
                                            <Row className="text-center px-1">
                                                <Col className="p-0 m-1">
                                                    <Card.Title className="fw-bold p-1 m-1 text-end">
                                                        Estado:
                                                    </Card.Title>
                                                </Col>
                                                <Col className="p-0 m-1 rounded-4">
                                                    <Card.Text className="p-1 m-1 text-start">
                                                        {stateProjectParse(project.estado)}
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className="mt-5">
                                        <Col className="pt-0" lg={6}>
                                            <h3 className='py-3 mt-3 fs-2'>Mensajes sin leer</h3>
                                            <div className="p-3 border border-info rounded-4">
                                                <Card.Title className="fw-bold">Proyecto:</Card.Title>
                                                <Card.Text>{project.titulo}</Card.Text>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <h3 className='py-3 mt-3 fs-2'>Pagos</h3>
                                            <div className="p-3 border border-info rounded-4">
                                                <Card.Subtitle className="text-end">
                                                    {formatDateLocal(project.fechaCreacion)}
                                                    <Card.Text><h4>{pagosEfectuados}</h4></Card.Text>
                                                </Card.Subtitle>
                                            </div>
                                        </Col>
                                    </Row>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))[0]
                    }
                </div>
            }
        </>
    );
};

export default DashboardEmpresa;