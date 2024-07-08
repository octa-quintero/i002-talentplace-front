import React from 'react'
import './ProyectCard.css'
import '../../index.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'

const ProyectCard = () => {
    return (
        <article className='container-fluid my-3 container-proyect-card'>
            <div className='d-flex container-fluid pt-3'>
                <div className='w-100'>
                    <h3 className='mb-0'>Titulo del proyecto</h3>
                    <p>Duracion:</p>
                </div>
                <div>
                    <p>Modalidad</p>
                    <p><strong>Precio</strong></p>
                </div>
            </div>
            <div className='container-fluid pb-3'>
                <p>Informacion sobre el proyecto</p>
                <p className='mb-0'><strong>Categoría: </strong>Categoria</p>
                <p className='mb-0'><strong>Disponibilidad: </strong>Tiempo completo / Parcial</p>
                <p className='mb-0'><strong>Habilidades: </strong>habilidad, habilidad, habilidad, habilidad</p>
                <div className='d-flex justify-content-between mt-1 container-item'>
                    <div className='d-flex gap-3 container-ri'>
                        <AiOutlineHeart className='ri-outlineheart' />
                        <BiBookmark className='ri-bookmark'/>
                    </div>
                    <button className='border-0 btn-postularse'>Postularse</button>
                </div>
            </div>
        </article>
    )
}

export default ProyectCard