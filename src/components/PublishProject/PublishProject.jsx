import React, { useEffect, useState } from 'react';
import {  Card, Col, Nav, Row, Form, Button } from "react-bootstrap"
import { AiOutlineSave } from "react-icons/ai";
import { GoEye } from "react-icons/go";
import { useUserContext } from '../../context/UserProvider';
import usePublishProjectForm from '../../hooks/usePublishProjectForm';
import { fetchAllHabilities } from '../../api/fetchAllHabilities';
import { fetchAllCategories } from '../../api/fetchAllCategories';
import Loading from '../../pages/shared/Loading';
import "./PublishProject.css"


const PublishProject = () => {
    const {
        projectState,
        setProjectState,
        errors,
        isSubmitting,
        loading,
        handleChange,
        handleSubmit,
        resetForm
    } = usePublishProjectForm();

    const [habilities, setHabilities] = useState([]);
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        const fetchHabilitiesCategories = async () => {
            try {
                const habilitiesData = await fetchAllHabilities();
                const categoriesData = await fetchAllCategories();
                setHabilities(habilitiesData);
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching habilities and categories:', error);
            }
        };

        fetchHabilitiesCategories();
    }, []);

    const handleHabilityChange = (e) => {
        const selectedHability = habilities.find(h => h.id === e.target.value);
        if (selectedHability && !projectState.habilidades.some(h => h.id === selectedHability.id)) {
          setProjectState((prevState) => ({
            ...prevState,
            habilidades: [...prevState.habilidades, selectedHability],
          }));
        }
    };
    
    const handleCategoryChange = (e) => {
        const selectedCategory = categories.find(c => c.id === e.target.value);
        if (selectedCategory) {
          setProjectState((prevState) => ({
            ...prevState,
            categoria: selectedCategory,
          }));
        }
    };

    const handleRemoveHability = (habilityId) => {
        setProjectState((prevState) => ({
          ...prevState,
          habilidades: prevState.habilidades.filter(h => h.id !== habilityId),
        }));
    };

    const firstToUpperCase = (modalidad) => {
        const firstLetter = modalidad.charAt(0).toUpperCase();
        const restText = modalidad.slice(1);
        return firstLetter + restText;
    };


  return (
    <>  
    <Form className='justify-content-center' onSubmit={handleSubmit}>
        <Col className="border border-info align-items-start mx-3 py-3 px-4 rounded-4 bg-white">
          <Row className="mb-3">
              <Form.Label column xl={1} md={2} className='fw-bold fs-5 me-5'>
                  Proyecto:
              </Form.Label>
              <Col xl={10} md={8}>
                  <Form.Control
                    className='py-2 border-dark rounded-4'
                    type="text"
                    placeholder="Titulo del proyecto"
                    name="titulo"
                    value={projectState.titulo}
                    onChange={handleChange}
                  />
                  {errors.titulo && <Form.Text className="text-danger">{errors.titulo}</Form.Text>}
              </Col>
              
          </Row>

          <Row className="mb-3">
              <Form.Label column xl={1} md={2} className='fw-bold fs-5 me-5 align-content-center'>
                  Descripción:
              </Form.Label>
              <Col xl={10} md={8}>
                  <Form.Control
                    className='rounded-4  border-dark custom-height no-resize'
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Detalle del puesto"
                    name='descripcion'
                    value={projectState.descripcion}
                    onChange={handleChange}
                  />
                  {errors.descripcion && <Form.Text className="text-danger">{errors.descripcion}</Form.Text>}
              </Col>
          </Row>

          <Row className="mb-3">
              <Form.Label column xl={1} md={2} className='fw-bold fs-5 me-5 align-content-center'>
                  Requisitos:
              </Form.Label>
              <Col xl={10} md={8}>
                  <Form.Control
                    className='rounded-4 border-dark custom-height no-resize'
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Detalle del puesto"
                    name='requisitos'
                    value={projectState.requisitos}
                    onChange={handleChange}
                  />
                  {errors.requisitos && <Form.Text className="text-danger">{errors.requisitos}</Form.Text>}
              </Col>
          </Row>

          <Row className="mb-3">     
              <Form.Label column xl={1} md={2} className='fw-bold fs-5 me-5'>
                Habilidades:
              </Form.Label>
              <Col xl={4} md={8}>
                <Form.Select
                className='rounded-4 border-dark'
                defaultValue="Seleccione habilidad"
                onChange={handleHabilityChange} 
                name="habilidades"
                >
                  <option>Seleccione habilidad</option>                            
                  {habilities &&
                  habilities
                  .sort((a, b) => a.nombre.localeCompare(b.nombre))
                  .map((hability) => (
                    <option key={hability.id} value={hability.id}>
                      {firstToUpperCase(hability.nombre)}
                    </option>
                  ))}
                </Form.Select>
                

                <Row className='p-2 justify-content-center'>
                  {projectState.habilidades.map((hability) => (
                  <Col xl={5} key={hability.id} className="position-relative border border-1 p-0 m-1 rounded-4 card-border align-content-center">
                      <button
                      type="button"
                      className="custom-close-button bg-transparent border-0 fs-4 position-absolute top-50 end-0 translate-middle-y"
                      onClick={() => handleRemoveHability(hability.id)}
                      >
                        &times;
                      </button>
                    <Card.Text className="p-1 m-1 text-center">
                        {firstToUpperCase(hability.nombre)}
                    </Card.Text>                        
                  </Col>                
                  ))}
                </Row>
                {errors.habilidades && <Form.Text className="text-danger">{errors.habilidades}</Form.Text>}
              </Col>
    
              <Form.Label column xl={1} md={2} className='fw-bold fs-5 me-5'>
                Categoria:
              </Form.Label>
              <Col xl={4} md={8}>
                <Form.Select
                className='rounded-4 border-dark'
                defaultValue="Seleccione categoria"
                onChange={handleCategoryChange}
                name="categoria"
                >
                  <option>Seleccione categoria</option>
                  {categories &&
                  categories
                  .sort((a, b) => a.nombre.localeCompare(b.nombre))
                  .map((category) => (
                    <option key={category.id} value={category.id}>
                      {firstToUpperCase(category.nombre)}
                    </option>
                  ))}   
                </Form.Select>

                {projectState.categoria && (
                  <Row className='p-2 justify-content-center'>
                    <Col xl={5} className="border border-1 p-0 m-1 rounded-4 card-border align-content-center">
                      <Card.Text className="p-1 m-1 text-center">
                          {firstToUpperCase(projectState.categoria.nombre)}
                      </Card.Text>                        
                    </Col>
                  </Row>
                )}

            {errors.categoria && <Form.Text className="text-danger">{errors.categoria}</Form.Text>}
              </Col>
          </Row>
            
          <Row>     
              <Form.Label className='fw-bold fs-5 me-5 mb-4'>
                Contrataciones
              </Form.Label>
          </Row>

          <Row>   
            <Form.Label column xl={1} md={2} className='fw-bold fs-5 me-5'>
                Modalidad:
              </Form.Label> 
              <Col xl={4} md={3}>
                <Form.Select 
                className='rounded-4 border-dark' 
                name='modalidad'
                
                onChange={handleChange}
                >
                  <option>Seleccione modalidad</option>
                  <option value="remoto">Remoto</option>
                  <option value="presencial">Presencial</option>
                  <option value="hibrido">Híbrido</option>
                </Form.Select>
                {errors.modalidad && <Form.Text className="text-danger">{errors.modalidad}</Form.Text>}
              </Col>
    
              <Form.Label column xl={1} md={1} className='fw-bold fs-5 me-5'>
                Estado:
              </Form.Label>
              <Col xl={4} md={3}>
                <Form.Select 
                className='rounded-4 border-dark'
                name='estado'
                
                onChange={handleChange}
                >
                  <option>Seleccione el estado</option>
                  <option value={true}>Vigente</option>
                  <option value={false}>No vigente</option>
                </Form.Select>
                {errors.estado && <Form.Text className="text-danger">{errors.estado}</Form.Text>}
              </Col>
              

              
          </Row>
        </Col>
        
        <Row className='d-flex justify-content-lg-end mx-2 py-3'>
            <Col lg={8} className='d-flex justify-content-center justify-content-lg-start mb-2'>
                    <button  className="rounded-3 border-1 border-black p-3 ms-1">
                        <AiOutlineSave className='fs-3'/>                
                    </button>
            </Col>

            <Col xl={2} lg={3} md={4}>
                <Button
                className='button border-dark border-1 text-dark my-2 w-100'
                onClick={resetForm}
                >
                    Descartar
                </Button>          
            </Col>
            <Col xl={2} lg={3} md={4}>
                <Button type="submit" className='button primary border-1 my-2 w-100'>
                    Publicar
                </Button>          
            </Col>
        </Row>
      </Form>
    </>
  )
}

export default PublishProject