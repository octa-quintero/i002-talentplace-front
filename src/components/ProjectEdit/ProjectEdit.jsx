import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';
import Loading from '../../pages/shared/Loading';
import { useEditProject } from '../../hooks/useEditProject';

const ProjectEdit = () => {

  const { project, loading } = useEditProject();

  const [projectState, setProjectState] = useState({
    titulo: '',
    descripcion: '',
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    checkbox: false,
  });

  useEffect(() => {
    if (project) {
      setProjectState({
        titulo: project.titulo,
        descripcion: project.descripcion,
        email: '', // Initialize with project data if available
        password: '', // Initialize with project data if available
        address1: '', // Initialize with project data if available
        address2: '', // Initialize with project data if available
        city: '', // Initialize with project data if available
        state: '', // Initialize with project data if available
        zip: '', // Initialize with project data if available
        checkbox: false, // Initialize with project data if available
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log('Submitted project:', projectState);
  };

    return (
      <>
      { loading ? (
        <div className="loading"><Loading/></div>
      ) :
        <Form className="border border-info align-items-start m-3 py-3 px-4 rounded-4 bg-white">
            
            <Row className="mb-3">
                <Form.Label column xl={1} md={2} className='fw-bold fs-5'>
                    Proyecto:
                </Form.Label>
                <Col xl={5} md={7}>
                    <Form.Control
                      className='py-2 border-dark'
                      type="text"
                      placeholder="Titulo del proyecto"
                      name="titulo"
                      value={projectState.titulo}
                      onChange={handleChange}
                    />
                </Col>
            </Row>

            <Row className="mb-3">
                <Form.Label column xl={1} md={2} className='fw-bold fs-5'>
                    Descripción:
                </Form.Label>
                <Col xl={11} md={7}>
                    <Form.Control
                      as="textarea"
                      aria-label="With textarea"
                      placeholder="Detalle del puesto"
                      name='descripcion'
                      onChange={handleChange}
                    />
                </Col>
            </Row>
{/* 
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
      
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
      
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
      
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
      
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
      
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
      
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
      
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
      }
    </>
    );
};

export default ProjectEdit;
