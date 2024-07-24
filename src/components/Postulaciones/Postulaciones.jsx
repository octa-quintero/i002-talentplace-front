import { Card, Col, Row } from "react-bootstrap"
import { useAllProjectsByUserId } from "../../hooks/useAllProjectsByUserId";
import Loading from "../../pages/shared/Loading";
import './Postulaciones.css';


export const Postulaciones = () => {

    const { projects, loading } = useAllProjectsByUserId();
    console.log(projects)

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
            {loading ? (
                <div className="loading"><Loading /></div>
            ) :

                <div className="p-3 my-5">

                    {projects.map((project) => (

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
                                                        {stateProjectParse(project.estado)}
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Row>
                            </Card.Body>
                        </Card>

                    ))
                    }
                </div>
            }
        </>
    );
};

export default Postulaciones;