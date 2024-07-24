import { Button, Card, CardTitle, Col, Nav, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { GoEye } from "react-icons/go";
import { LuPencilLine } from "react-icons/lu";
import { GoEyeClosed } from "react-icons/go";
import formatDateLocal from "../../utils/formatDateLocal";
import { useAllProjectsByUserId } from "../../hooks/useAllProjectsByUserId";
import Loading from "../../pages/shared/Loading";
import "./ProjectList.css";

export const ProjectList = () => {

    const navigate = useNavigate();

    const { projects, loading } = useAllProjectsByUserId();

    const stateProjectParse = (boolean) => {
        return boolean ? "Vigente" : "No vigente";
    }

    const firstToUpperCase = (modalidad) => {
        const firstLetter = modalidad.charAt(0).toUpperCase();
        const restText = modalidad.slice(1);
        return firstLetter + restText;
    }

    const handleEditClick = (projectId) => {
        navigate(`/dashboard/projects/edit/${projectId}`);
    }
    const handleGoCreate = () => {
        navigate(`/dashboard/projects/new`);
      }

    return(
        <>
            { loading ? (
                    <div className="loading"><Loading/></div>
                ) : 
                projects.length === 0 ?
                <Card className="my-5 py-5 align-items-center">
                    <CardTitle className="fs-2 fw-bold">
                    No tienes ningún proyecto publicado
                    </CardTitle>
                    <GoEyeClosed size={"6em"} color={"#8C52FF"} />
                    <Card.Text className="text">
                    No esperes más, tu próximo gran talento podría estar a solo una publicación de distancia. 
                    </Card.Text>
                    <Card.Text className="text">
                    ¡Empieza ahora y encuentra a tu futuro colaborador!
                    </Card.Text>
                    <Row className='d-flex justify-content-lg-end mx-3 py-3'>         
                        <Button
                        className='button primary border-1 my-2 w-100'
                        onClick={handleGoCreate}
                        >
                            Publicar nuevo proyecto
                        </Button>       
                    </Row>
                </Card>
                : projects.map((project) => (
                <Card key={project.id} className="border border-info align-items-start m-3">
                    <Card.Body className="pt-0">
                        <Row>
                            <Card.Subtitle className="text-end">
                                {formatDateLocal(project.fechaCreacion)}
                            </Card.Subtitle>
                            <Card.Title className="fw-bold">
                                Proyecto:
                            </Card.Title>
                            <Card.Text>
                                {project.titulo}
                            </Card.Text>        
                            <Card.Title className="fw-bold">
                                Descripcion:
                            </Card.Title>
                            <Card.Text>
                                {project.descripcion}
                            </Card.Text>        
                            <Card.Title className="fw-bold">
                                Requisitos:
                            </Card.Title>
                            <Card.Text>
                                {project.requisitos}
                            </Card.Text>
        
                            <Col lg={6}>
                                <Card.Title className="fw-bold">
                                    Habilidades:
                                </Card.Title>
                                <Row className="text-center px-4">
                                    {Array.isArray(project.habilidades) ? project.habilidades.map((habilidad) => (
                                            <Col lg={5} className="border border-1 p-0 m-1 rounded-4 card-border align-content-center" key={habilidad.id}>
                                                <Card.Text className="p-1 m-1">
                                                    {firstToUpperCase(habilidad.nombre)}
                                                </Card.Text>                        
                                            </Col> )
                                        )
                                        :                                
                                        <Col lg={4} className="border border-1 p-0 m-1 rounded-4 card-border" key={habilidad.id}>
                                            <Card.Text className="p-1 m-1">
                                                No hay ninguna Habilidad cargada
                                            </Card.Text>                        
                                        </Col>
                                    }
                                </Row>
                            </Col>
        
                            <Col lg={6}>
                                <Card.Title className="fw-bold">
                                    Categorias:
                                </Card.Title>
                                <Row className="text-center px-4">
                                    <Col lg={4} className="border border-1 p-0 m-1 rounded-4 card-border">
                                        <Card.Text className="p-1 m-1">
                                            {firstToUpperCase(project.categoria.nombre)}
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
                                            Region:
                                        </Card.Title>
                                    </Col>
                                    <Col className="border border-1 p-0 m-1 rounded-4 card-border">
                                        <Card.Text className="p-1 m-1">
                                            LATAM
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
                            <Col lg={3}>
                                <Nav activeKey="" className="justify-content-lg-end justify-content-center">
                                    <Nav.Link onClick={() => handleEditClick(project.id)}>
                                        <LuPencilLine className="color-purple fs-2"/>                                            
                                    </Nav.Link>
                                    <Nav.Link>
                                        <GoEye className="color-purple fs-2"/>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <AiOutlineMail className="color-purple fs-2"/>                                            
                                    </Nav.Link>                                        
                                </Nav>
                            </Col>
        
                        </Row>
                    </Card.Body>
                </Card>
                ))
            }
        </>
    )
}