import { Card, Row, Col } from "react-bootstrap";
import { useAllProjectsByUserId } from '../../hooks/useAllProjectsByUserId';
import formatDateLocal from "../../utils/formatDateLocal";
import Loading from "../../pages/shared/Loading";


export const DashboardFreelancer = () => {

    let saldoFreelancer = "USD 800,00";

    const { projects, loading } = useAllProjectsByUserId();

    const stateProjectParse = (boolean) => {
        return boolean ? "Vigente" : "No vigente";
    }

    const firstToUpperCase = (modalidad) => {
        const firstLetter = modalidad.charAt(0).toUpperCase();
        const restText = modalidad.slice(1);
        return firstLetter + restText;
    }


    return (
        <>
            <div className="p-3 mt-5">
                <h3 className='fs-2 mx-3'>Estado de la cuenta</h3>
                <Card className="border border-info align-items-end m-3 p-3" >

                    <Row>
                        <Col lg={6}>
                            <Card.Title className="fw-bold">Proyectos activos</Card.Title>
                            <Card.Text className=''>{ projects.length }</Card.Text>
                        </Col>

                        <Col lg={6}>
                            <Card.Title className='fw-bold'>Saldo disponible</Card.Title>
                            <Card.Text>{saldoFreelancer}</Card.Text>
                        </Col>

                    </Row>

                </Card>
            </div>
            {loading ? (
                <div className="loading"><Loading /></div>
            ) :

                <div className="p-3">
                    <h3 className='p-3 fs-2'>Última postulación</h3>
                    {projects.map((project) => (
                        <Card key={project.id} className="align-items-start m-3 border border-info">
                            <Card.Body className="p-3">
                                <Row>
                                    <Card.Title className="fw-bold">Proyecto:</Card.Title>
                                    <Card.Text>{project.titulo}</Card.Text>
                                </Row>

                                <Row className="pt-3">
                                    <Col lg={4}>
                                        <Card.Title className="fw-bold">Último pago efectuado</Card.Title>
                                        <Card.Text>{formatDateLocal(project.fechaCreacion)}</Card.Text>
                                    </Col>
                                    <Col lg={4}>
                                        <Card.Title className="fw-bold">Estado:</Card.Title>
                                        <Card.Text>{stateProjectParse(project.estado)}</Card.Text>
                                    </Col>
                                    <Col lg={4}>
                                        <Card.Title className="fw-bold">Total hasta el momento:</Card.Title>
                                        <Card.Text>{projects.length}</Card.Text>
                                    </Col>

                                    <Row className="pt-3">

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

export default DashboardFreelancer;