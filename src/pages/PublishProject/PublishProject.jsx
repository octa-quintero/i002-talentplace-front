import Input from '../../components/Input/Input'
import {  Card, Col, Nav, Row } from "react-bootstrap"
import { AiOutlineSave } from "react-icons/ai";
import { GoEye } from "react-icons/go";
import Button from '../../components/Button/Button';
import { useUserContext } from '../../context/UserProvider';
import usePublishProjectForm from '../../hooks/usePublishProjectForm';



const PublishProject = () => {
   
    const {
        formData,
        errors,
        isSubmitting,
        loading,
        handleChange,
        handleSelectChange,
        handleSubmit,
        resetForm
    } = usePublishProjectForm();

    
    
    const habilitiesOptions = [
        {value: 'HTML', label: "HTML"},
        {value: 'CSS', label: "CSS"},
        {value: 'Javascript', label: "Javascript"},
        {value: 'ReactJs', label: "ReactJs"},
        {value: 'SQL', label: "SQL"},
        {value: 'Python', label: "Python"},
        {value: 'Java', label: "Java"},
        {value: 'C#', label: "C#"}
    ]
    const categoriesOptions = [
        {value: 'Frontend', label: "Frontend"},
        {value: 'Backend', label: "Backend"},
        {value: 'UX/UI', label: "UX/UI"},
        {value: 'QA', label: "QA"},
        {value: 'PM', label: "PM"}
    ]
    const modalityOptions = [
        {value: 'Presencial', label: "Presencial"},
        {value: 'Remoto', label: "Remoto"},
        {value: 'Hibrido', label: "Hibrido"}
    ]
    const statusOptions = [
        {value: 'Vigente', label: "Vigente"},
        {value: 'Caducado', label: "Caducado"}
    ]

  return (
    <>  
        <form onSubmit={handleSubmit}>
            <Card  className="border border-info align-items-start m-3">
                <Card.Body className="pt-0">
                    <Row className='gap-3'>
                        <Input
                            label="Título:" 
                            name="titulo" 
                            placeholder="Título de proyecto" 
                            width="50%" 
                            onChange={handleChange} 
                            value={formData.titulo} 
                            errors={errors}
                            type='text'
                        />
                        <Input 
                            label="Descripción:" 
                            name="descripcion" 
                            placeholder="Descripción de proyecto " 
                            width="100%" 
                            onChange={handleChange} 
                            value={formData.descripcion} 
                            errors={errors}
                            type='text'
                        />
                        <Input 
                            label="Requisitos:" 
                            name="requisitos" 
                            placeholder="Requisitos para tu proyecto" 
                            width="100%" 
                            onChange={handleChange} 
                            value={formData.requisitos} 
                            errors={errors}
                            type='text'
                        />
                        <Row>
                            <Col lg={6} className="mb-3">  
                                <Input 
                                    label="Habilidades:" 
                                    name="habilidades" 
                                    placeholder="Seleccione habilidad" 
                                    width="50%" 
                                    onChange={handleChange} 
                                    value={formData.habilidades} 
                                    multiple={true} 
                                    errors={errors}
                                    options={habilitiesOptions}
                                /> 
                            </Col>
                            <Col lg={6} >
                                <Input 
                                    label="Categorias:" 
                                    name="categoria" 
                                    placeholder="Seleccione categoria" 
                                    width="100%" 
                                    onChange={handleChange} 
                                    value={formData.categoria} 
                                    errors={errors}
                                    options={categoriesOptions}
                                />
                            </Col>
                        </Row>
                        <Card.Title className="fw-bold">
                            Contrataciones
                        </Card.Title>
                        <Row>
                            <Col lg={4} className="mb-3">
                                <Input 
                                    label="Modalidad:" 
                                    name="modalidad" 
                                    placeholder="Seleccione modalidad" 
                                    width="100%" 
                                    onChange={handleChange} 
                                    value={formData.modalidad} 
                                    errors={errors}
                                    options={modalityOptions}
                                />
                            </Col>
                            <Col lg={4} >
                                <Input 
                                    label="Estado:" 
                                    name="estado" 
                                    placeholder="Seleccione estado" 
                                    width="100%" 
                                    onChange={handleChange} 
                                    value={formData.estado} 
                                    errors={errors}
                                    options={statusOptions}
                                />
                            </Col>
                            <Col lg={4} >
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
                    <button onClick={resetForm} className="rounded-3 border-1 border-black p-2 ms-1">
                        <AiOutlineSave className='fs-3'/>                
                    </button>
                </Col>
                <Col lg={4} className='d-flex gap-5 mb-2' >
                    <Button 
                        type="secondary" 
                        onClick={resetForm}
                    >
                        Descartar
                    </Button>             
                    <Button 
                        type="primary" 
                        htmlType='submit' 
                        disabled={isSubmitting || loading}
                    >
                        {loading ? 'Publicando...' : 'Publicar'}
                    </Button>             
                </Col>
            </Row>        
        </form>
    </>
  )
}

export default PublishProject