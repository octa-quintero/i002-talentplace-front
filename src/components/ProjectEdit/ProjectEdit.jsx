import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, Card, } from 'react-bootstrap';
import { FaTrashCan } from "react-icons/fa6";
import "./ProjectEdit.css"
import Loading from '../../pages/shared/Loading';
import { fetchAllHabilities } from '../../api/fetchAllHabilities';
import { fetchAllCategories } from '../../api/fetchAllCategories';
import { useFetchProjectById } from '../../hooks/useFetchProjectById';
import { useEditProject } from '../../hooks/useEditProject';
import { useDeleteProject } from '../../hooks/useDeleteProject';
import { useDiscardChanges } from '../../hooks/useDiscardChanges';

const ProjectEdit = () => {
  
  const { project, loading } = useFetchProjectById();
  const { editProject } = useEditProject();
  const { deleteProject } = useDeleteProject();
  const { discardChanges } = useDiscardChanges();

  const [habilities, setHabilities] = useState([]);
  const [categories, setcategories] = useState([]);

  const [projectState, setProjectState] = useState({
    titulo: '',
    descripcion: '',
    requisitos: '',
    habilidades: [],
    categoria: '',
    modalidad: '',
    estado: false,
  });

  useEffect(() => {
    if (project) {
      setProjectState({
        titulo: project.titulo,
        descripcion: project.descripcion,
        requisitos: project.requisitos,
        habilidades: project.habilidades,
        categoria: project.categoria,
        modalidad: project.modalidad,
        estado: project.estado,
      });
    }
  }, [project]);

  useEffect(() => {
    const fetchHabilitiesCategories = async () => {
      const habilitiesData = await fetchAllHabilities();
      const categoriesData = await fetchAllCategories();
      setHabilities(habilitiesData);
      setcategories(categoriesData);
    };

    fetchHabilitiesCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;
    if (name === 'estado') {
      newValue = value === 'true';
    }

    setProjectState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

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

  const firstToUpperCase = (modalidad) => {
    const firstLetter = modalidad.charAt(0).toUpperCase();
    const restText = modalidad.slice(1);
    return firstLetter + restText;
  };

  const handleRemoveHability = (habilityId) => {
    setProjectState((prevState) => ({
      ...prevState,
      habilidades: prevState.habilidades.filter(h => h.id !== habilityId),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const habilities = projectState.habilidades.map(h => h.nombre);
    const category = projectState.categoria.nombre;

    const projectDataUpdate= {
      ...projectState,
      projectId: project.id,
      habilidades: habilities,
      categoria: category
    };

    await editProject(projectDataUpdate);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteProject();
  };

  const handleCancel = () => {
    const route = '/dashboard/projects'
    discardChanges(route);
  };

  return (
    <>
    { loading ? (
      <div className="loading"><Loading/></div>
    ) :
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
              </Col>
          </Row>

          <Row className="mb-3">
              <Form.Label column xl={1} md={2} className='fw-bold fs-5 me-5 align-content-center'>
                  Descripción:
              </Form.Label>
              <Col xl={10} md={8}>
                  <Form.Control
                    className='rounded-4 border-dark custom-height no-resize'
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Detalle del puesto"
                    name='descripcion'
                    value={projectState.descripcion}
                    onChange={handleChange}
                  />
              </Col>
          </Row>

          <Row className="mb-3">
              <Form.Label column xl={1} md={2} className='fw-bold fs-5 me-5 align-content-center'>
                  Requisitos:
              </Form.Label>
              <Col xl={10} md={8}>
                  <Form.Control
                    className='rounded-4 border-dark no-resize'
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Detalle del puesto"
                    name='requisitos'
                    value={projectState.requisitos}
                    onChange={handleChange}
                  />
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

              </Col>
    
              <Form.Label column xl={1} md={2} className='fw-bold fs-5 me-5'>
                Categoria:
              </Form.Label>
              <Col xl={4} md={8}>
                <Form.Select
                className='rounded-4 border-dark'
                defaultValue="Seleccione categoria"
                onChange={handleCategoryChange}
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
                defaultValue={project.modalidad}
                onChange={handleChange}
                >
                  <option>Seleccione modalidad</option>
                  <option value="remoto">Remoto</option>
                  <option value="presencial">Presencial</option>
                  <option value="hibrido">Híbrido</option>
                </Form.Select>
              </Col>
    
              <Form.Label column xl={1} md={1} className='fw-bold fs-5 me-5'>
                Estado:
              </Form.Label>
              <Col xl={4} md={3}>
                <Form.Select 
                className='rounded-4 border-dark'
                name='estado'
                defaultValue={project.estado}
                onChange={handleChange}
                >
                  <option>Seleccione el estado</option>
                  <option value={true}>Vigente</option>
                  <option value={false}>No vigente</option>
                </Form.Select>
              </Col>

              <Col xs={12} lg={1} className='d-flex justify-content-center justify-content-lg-end ms-auto pt-2 p-lg-0'>
                <Button
                className='border-0 text-dark bg-transparent p-0'
                onClick={handleDelete}
                >
                  <FaTrashCan className='fs-1' />
                </Button>   
              </Col>
          </Row>
        </Col>
        
        <Row className='d-flex justify-content-lg-end mx-3 py-3'>
          <Col xl={2} lg={3} md={4}>
          <Button
          className='button border-dark border-1 text-dark my-2 w-100'
          onClick={handleCancel}
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
    }
  </>
  );
};

export default ProjectEdit;