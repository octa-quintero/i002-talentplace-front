import { Button, Card, Col, Row } from "react-bootstrap"
import "./ProjectList.css";

export const ProjectList = () => {
    return(
        <Card className="border border-info align-items-start">
            <Card.Body className="pt-0">
                <Row>
                    <Card.Subtitle className="text-end">
                        11/07/2024
                    </Card.Subtitle>
                    <Card.Title className="fw-bold">
                        Proyecto:
                    </Card.Title>
                    <Card.Text>
                        Desarrollo de un Sistema de Gestion Financiera
                    </Card.Text>

                    <Card.Title className="fw-bold">
                        Descripcion:
                    </Card.Title>
                    <Card.Text>
                        Una empresa de consultoria financiera esta buscando un freelancer para desarrollar un sistema de gestion financiera personalizado. El proyecto incluye la creacion de herramientas para el seguimiento de gastos, la elaboracion de informes financieros y la integracion con plataformas de contabilidad existentes.
                    </Card.Text>

                    <Card.Title className="fw-bold">
                        Requisitos:
                    </Card.Title>
                    <Card.Text>
                        Conocimientos en finanzas, habilidades en programacion (preferiblemente en Python o Java), experiencia en desarrollo de software financiero.
                    </Card.Text>

                    <Col lg={6}>
                        <Card.Title className="fw-bold">
                            Habilidades:
                        </Card.Title>
                        <Row className="text-center px-4">
                            <Col lg={4} className="border border-1 p-0 m-1 rounded-4 card-border">
                                <Card.Text className="p-1 m-1">
                                    Pensamiento critico
                                </Card.Text>                        
                            </Col>
                            <Col lg={4} className="border border-1 p-0 m-1 rounded-4 card-border">
                                <Card.Text className="p-1 m-1">
                                    Resolucion de problemas
                                </Card.Text>                        
                            </Col>
                            <Col lg={4} className="border border-1 p-0 m-1 rounded-4 card-border">
                                <Card.Text className="p-1 m-1">
                                    Atencion al detalle
                                </Card.Text>                        
                            </Col>
                            <Col lg={4} className="border border-1 p-0 m-1 rounded-4 card-border">
                                <Card.Text className="p-1 m-1">
                                    Gestion del tiempo
                                </Card.Text>                        
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={6}>
                        <Card.Title className="fw-bold">
                            Categorias:
                        </Card.Title>
                        <Row className="text-center px-4">
                            <Col lg={4} className="border border-1 p-0 m-1 rounded-4 card-border">
                                <Card.Text className="p-1 m-1">
                                    Gestion y finanzas
                                </Card.Text>
                            </Col>
                        </Row>
                    </Col>

                    <Card.Title className="fw-bold">
                        Contrataciones
                    </Card.Title>

                    <Col lg={3}>
                        <Row className="text-center px-1">
                            <Col className="p-0 m-1">
                                <Card.Title className="fw-bold p-1 m-1 text-end">
                                    Personal:
                                </Card.Title>
                            </Col>
                            <Col className="border border-1 p-0 m-1 rounded-4 card-border">
                                <Card.Text className="p-1 m-1">
                                    Cesar Ausa
                                </Card.Text>
                            </Col>                            
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <Row className="text-center px-1">
                            <Col className="p-0 m-1">
                                <Card.Title className="fw-bold p-1 m-1 text-end">
                                    Modalidad:
                                </Card.Title>
                            </Col>
                            <Col className="p-0 m-1 rounded-4">
                                <Card.Text className="p-1 m-1 text-start">
                                    Remoto
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
                                    Vigente
                                </Card.Text>
                            </Col>                            
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <Card.Title className="fw-bold">
                            ICONOS
                        </Card.Title>
                    </Col>

                </Row>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
      </Card>
    )
}