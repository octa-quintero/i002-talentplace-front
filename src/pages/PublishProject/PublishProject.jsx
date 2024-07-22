import Input from '../../components/Input/Input'
import {  Card, Col, Nav, Row } from "react-bootstrap"
import { AiOutlineSave } from "react-icons/ai";
import { GoEye } from "react-icons/go";
import Button from '../../components/Button/Button';
import { useState } from 'react';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const PublishProject = () => {
    const { user } = useUserContext();
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        // idEmpresa:'',
        estado:'',
        presupuesto:'',
        modalidad: '',
        habilidad: '',
        categorias: '',
        requisitos: ''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
          const response = await axios.post(`${backendUrl}/projects`, formData);
          console.log('Proyecto publicado:', response.data);
        } catch (error) {
          console.error('Error al publicar el proyecto:', error);
        }
      };

  return (
    <>  
        <form onSubmit={handleSubmit}>
            <Card  className="border border-info align-items-start m-3">
                <Card.Body className="pt-0">
                    <Row className='gap-3'>
                        <Input name="Proyecto:" placeholder="Título de proyecto" width="50%" value={formData.titulo} onChange={handleChange}/>
                        <Input name="Descripción:" placeholder="Descripción de proyecto " width="100%" value={formData.descripcion} onChange={handleChange}/>
                        <Input name="Requisitos:" placeholder="Requisitos para tu proyecto" width="100%" value={formData.requisitos} onChange={handleChange}/>
                        <Row >
                            <Col lg={6} className="mb-3">
                                <Input name="Habilidades:" placeholder="Seleccione habilidad" width="100%" value={formData.habilidad} onChange={handleChange}
                                    options={[
                                        { value: 'opcion1', label: 'Opción 1' },
                                        { value: 'opcion2', label: 'Opción 2' },
                                        { value: 'opcion3', label: 'Opción 3' }
                                    ]}
                                />
                            </Col>
                            <Col lg={6} >
                                <Input name="Categorias:" placeholder="Seleccione categoria" width="100%" value={formData.categorias} onChange={handleChange}
                                    options={[
                                        { value: 'opcion1', label: 'Opción 1' },
                                        { value: 'opcion2', label: 'Opción 2' },
                                        { value: 'opcion3', label: 'Opción 3' }
                                    ]}
                                />
                            </Col>
                        </Row>
                        <Card.Title className="fw-bold">
                            Contrataciones
                        </Card.Title>
                        <Row>
                            <Col lg={3} className="mb-3">
                                <Input name="Modalidad:" placeholder="Seleccione modalidad" width="100%" value={formData.modalidad} onChange={handleChange}
                                    options={[
                                        { value: 'opcion1', label: 'Opción 1' },
                                        { value: 'opcion2', label: 'Opción 2' },
                                        { value: 'opcion3', label: 'Opción 3' }
                                    ]}
                                />
                            </Col>
                            <Col lg={3} >
                                <Input name="Estado:" placeholder="Seleccione estado" width="100%" value={formData.estado} onChange={handleChange}
                                    options={[
                                        { value: 'opcion1', label: 'Opción 1' },
                                        { value: 'opcion2', label: 'Opción 2' },
                                        { value: 'opcion3', label: 'Opción 3' }
                                    ]}
                                />
                            </Col>
                            <Col lg={6} >
                                <Nav activeKey="" className="justify-content-lg-end justify-content-center">
                                    <Nav.Link eventKey="link-event-key">
                                        <GoEye className="color-purple fs-2"/>
                                    </Nav.Link>                                       
                                </Nav>
                            </Col>
                        </Row>              
                    </Row>
                </Card.Body>
            </Card>
            <Row className='m-0'>
                <Col lg={8} className='d-flex justify-content-center justify-content-lg-start mb-2'>
                    <button className="rounded-3 border-1 border-black p-2 ms-1">
                        <AiOutlineSave className='fs-3'/>                
                    </button>
                </Col>
                <Col lg={4} className='d-flex gap-5 mb-2' >
                    <Button type="secondary" >Descartar</Button>             
                    <Button type="primary" htmlType='submit'>Publicar</Button>             
                </Col>
            </Row>        
        </form>
    </>
  )
}

export default PublishProject