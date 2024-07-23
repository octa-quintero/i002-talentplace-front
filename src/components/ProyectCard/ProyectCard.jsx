import React from 'react';
import { BsBookmarkFill, BsHeartFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import Button from '../Button/Button';
import './ProyectCard.css';
import '../../index.css';

const ProyectCard = ({ projects }) => {

    return (
        <div>
            {projects.map((project) => (
                <article key={project.id} className='container-fluid my-3 container-proyect-card'>
                    <div className='d-flex container-fluid pt-3'>
                        <div className='w-100'>
                            <h3 className='mb-0'>{project.titulo}</h3>
                            <p>Empresa: {project.empresaId}</p>
                        </div>
                        <div>
                            <p>{project.modalidad}</p>
                            <p><strong></strong> {project.estado}</p>
                        </div>
                    </div>
                    <div className='container-fluid pb-3'>
                        <p>{project.descripcion}</p>
                        
                        <p className='mb-0 category-container d-flex'>
                            <strong>Categoría:&nbsp;</strong>
                            <div>
                                {project.categoria.nombre}
                            </div>
                        </p>
                        
                        <p className='mb-0 d-flex hability-container'>
                            <strong>Habilidades:&nbsp;</strong>
                            <div className='d-flex hability-group'>
                                {project.habilidades.map((habilidad)=>(
                                    <p key={habilidad.id}>{habilidad.nombre},&nbsp; </p>
                                ))}
                            </div>
                        </p>

                        <div className='d-flex justify-content-between mt-1 container-item'>
                            <div className='d-flex gap-3 container-ri'>
                                {project.clickedHeart 
                                    ? <BsHeartFill className='ri-outlineheart' />
                                    : <AiOutlineHeart className='ri-outlineheart' />
                                }
                                {project.clickedBookmark 
                                    ? <BsBookmarkFill className='ri-bookmark' />
                                    : <BiBookmark className='ri-bookmark' />
                                }
                            </div>
                            <div className='col-md-4 col-lg-2'>
                                <Button type='primary' to="/login">Postularse</Button>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default ProyectCard;