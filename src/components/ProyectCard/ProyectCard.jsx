import React from 'react';
import Button from '../Button/Button';
import './ProyectCard.css';
import '../../index.css';
import { Fade } from 'react-awesome-reveal';
import { useUserContext } from '../../context/UserProvider';

const ProyectCard = ({ projects }) => {

    const { token, user } = useUserContext();

    return (
        <div>
            {projects.map((project) => (
                <Fade key={project.id}>
                <article  className='container-fluid my-3 container-proyect-card'>
                    <div className='d-flex container-fluid pt-3 flex-column flex-sm-row'>
                        <div className='w-100'>
                            <h3 className='mb-0'>{project.titulo}</h3>
                            <p><strong>Empresa:&nbsp;</strong>{project.empresaNombre}</p>
                        </div>
                        <div className='w-25 w-sm-100 text-end text-sm-end'>
                            <p className='mb-0'><strong>{project.fechaCreacion.substring(0, 10)}</strong></p>
                            <p><strong>{project.modalidad}</strong></p>
                        </div>
                    </div>
                    <div className='container-fluid pb-3'>
                        <p>{project.descripcion}</p>
                        
                        <p className='mb-0 category-container d-flex'>
                            <strong>Categoría:&nbsp;</strong>                            
                            {project.categoria.nombre}
                        </p>
                        <div className='mb-0 d-flex hability-container'>
                            <strong>Requisitos:&nbsp;</strong>
                            <div className='d-flex hability-group'>
                                {project.requisitos}
                            </div>
                        </div>

                        
                        <div className='mb-0 d-flex hability-container'>
                            <strong>Habilidades:&nbsp;</strong>
                            <div className='d-flex hability-group'>
                                {project.habilidades.map((habilidad)=>(
                                    <p key={habilidad.id}>{habilidad.nombre},&nbsp; </p>
                                ))}
                            </div>
                        </div>

                        <div className='d-flex justify-content-end mt-1 container-item'>
                            <div className='col-md-4 col-lg-2'>
                                {token?
                                    <Button type='primary' to={`/project/application/${project.id}`}>Postularse</Button>
                                :
                                    <Button type='primary' to="/login">Postularse</Button>
                                }
                            </div>
                        </div>
                    </div>
                </article>
                </Fade>
            ))}
        </div>
    );
};

export default ProyectCard;