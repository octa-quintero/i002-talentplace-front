import { Card, Row, Col } from "react-bootstrap";
import formatDateLocal from "../../utils/formatDateLocal";
import Loading from "../../pages/shared/Loading";
import { useFetchApplicationsById } from "../../hooks/useFetchApplicationsById";


export const DashboardFreelancer = () => {

    const { applications, projects, loading } = useFetchApplicationsById();

    console.log(projects)

    const stateProjectParse = (boolean) => {
        return boolean ? "Vigente" : "No vigente";
    }

    const firstToUpperCase = (modalidad) => {
        const firstLetter = modalidad.charAt(0).toUpperCase();
        const restText = modalidad.slice(1);
        return firstLetter + restText;
    }
    const tipoPrecio = "Fijo";
    const saldoFreelancer = "USD 800,00";

    return (

        <div className="p-3 mt-5">
            <h3 className='fs-2 mx-3'>Estado de la cuenta</h3>
            <Card className="border border-info align-items-end m-3 p-3" >

                <Row>
                    <Col lg={6}>
                        <Card.Title className="fw-bold">Proyectos activos</Card.Title>
                        <Card.Text className=''>{ loading ? 0 : projects.length }</Card.Text>
                    </Col>

                    <Col lg={6}>
                        <Card.Title className='fw-bold'>Saldo disponible</Card.Title>
                        <Card.Text>{saldoFreelancer}</Card.Text>
                    </Col>

                </Row>

            </Card>

            {loading ? (
                <div className="loading"><Loading /></div>
            ) :
                projects.map((project) => (

                    <Card key={project.id} className="align-items-start m-3 border border-info p-2 m-1 rounded-4 pt-4 card-postulacion">

                        <Card.Body className="pt-0">
                            <Row className="">
                                <Row>
                                    <Card.Title className="fw-bold">{project.titulo}</Card.Title>
                                </Row>

                                <Row>
                                    <Card.Text className="pt-3">{project.descripcion}</Card.Text>
                                </Row>

                                <Row className="pt-3">

                                    <Col className="border border-1 p-0 m-1 rounded-4 card-border" lg={3}>
                                        <Row className="text-center px-1">
                                            <Col className="p-0 m-1">
                                                <Card.Title className="fw-bold p-1 m-1 text-end">
                                                    Estado
                                                </Card.Title>
                                            </Col>
                                            <Col className="p-0 m-1 rounded-4">
                                                <Card.Text className="p-1 m-1 text-start">
                                                    {stateProjectParse(project.estado)}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="border border-1 p-0 m-1 rounded-4 card-border" lg={3}>
                                        <Row className="text-center px-1">
                                            <Col className="p-0 m-1">
                                                <Card.Title className="fw-bold p-1 m-1 text-end">
                                                    Publicado
                                                </Card.Title>
                                            </Col>
                                            <Col className="p-0 m-1 rounded-4">
                                                <Card.Text className="p-1 m-1 text-start">
                                                    {firstToUpperCase(project.modalidad)}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="border border-1 p-0 m-1 rounded-4 card-border" lg={4}>
                                        <Row className="text-center px-1">
                                            <Col className="p-0 m-1">
                                                <Card.Title className="fw-bold p-1 m-1 text-end">
                                                    Tipo de precio
                                                </Card.Title>
                                            </Col>
                                            <Col className="p-0 m-1 rounded-4">
                                                <Card.Text className="p-1 m-1 text-start">
                                                    {tipoPrecio}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Row>
                        </Card.Body>
                    </Card>
                )
                )

            }
        </div>
    );
};

export default DashboardFreelancer;