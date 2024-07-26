import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from "react-bootstrap"
import Loading from "../../pages/shared/Loading";
import './Postulaciones.css';
import { useFetchApplicationsById } from "../../hooks/useFetchApplicationsById";
import { GoEyeClosed } from 'react-icons/go';
import { Link } from 'react-router-dom';


export const Postulaciones = () => {

    const { applications, projects, loading } = useFetchApplicationsById();

    const stateProjectParse = (boolean) => {
        return boolean ? "Vigente" : "No vigente";
    }

    const firstToUpperCase = (modalidad) => {
        const firstLetter = modalidad.charAt(0).toUpperCase();
        const restText = modalidad.slice(1);
        return firstLetter + restText;
    }

    const tipoPrecio = "Fijo";

    return (
        <>
            {
                loading ? (
                    <div className="loading" > <Loading /></div >
                ) :
                    projects.length === 0
                    ? (                
                        <Card className="my-5 py-5 align-items-center">
                            <Card.Title className="fs-2 fw-bold">
                            No tienes ningúna postulacion
                            </Card.Title>
                            <GoEyeClosed size={"6em"} color={"#8C52FF"} />
                            <Card.Text className="text">
                            No esperes más, tu próxima gran oportunidad podría estar a solo una postulación de distancia. 
                            </Card.Text>
                            <Card.Text className="text">
                            ¡Empieza ahora y encuentra el trabajo perfecto para ti!
                            </Card.Text>
                            <Row className='d-flex justify-content-lg-end mx-3 py-3'>         
                                <Button
                                className='button primary border-1 my-2 w-100'
                                as={Link}
                                to='/opportunities'
                                >
                                    Buscar oportunidades
                                </Button>       
                            </Row>
                        </Card>
                    ) :   
                    projects.map((project) => (
                        <div key={project.id}>

                            <Card className="align-items-start m-3 border border-info p-2 m-1 rounded-4 pt-4 card-postulacion">

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
                                            <Col className="border border-1 p-0 m-1 rounded-4 card-border" lg={3}>
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
                        </div>
                    )
                )
            }
        </>
    );
};

export default Postulaciones;