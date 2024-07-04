import React from 'react'
import './ProyectCard.css'
import '../../index.css'

const ProyectCard = () => {
    return (
        <article className='container-fluid'>
            <div className='d-flex container-fluid '>
                <div>
                    <h3>Titulo del proyecto</h3>
                    <p>Duracion:</p>
                </div>
                <div>
                    <p>Modalidad</p>
                    <p><strong>Precio</strong></p>
                </div>
            </div>
            <div>
                <p>Informacion sobre el proyecto</p>
                <p><strong>Categoría:</strong>Categoria</p>
                <p><strong>Disponibilidad:</strong>Tiempo completo / Parcial</p>
                <p><strong>Habilidades:</strong>habilidad, habilidad, habilidad, habilidad</p>
                <div>
                    <div>
                        <img src="" alt="corazon" />
                        <img src="" alt="guardar" />
                    </div>
                    <button>Postularse</button>
                </div>
            </div>
        </article>
    )
}

export default ProyectCard