import React from 'react'
import './Dropdown.css'
import '../../index.css'
import '../Search/Search.css'


const Dropdown = ({ classForSearch }) => {
    const  container = classForSearch ? "container-search__dropdown" : "";

    return (
        <div className={container}>
            <div id="search-input">
                <div className='search-query form-control'>
                    <div className="dropdown w-100 d-flex">
                        {classForSearch ? 
                            (<>
                                <button className="btn dropdown-toggle" id='btn-filtrar' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ordernar por
                                </button>
                                <ul className="dropdown-menu" id='dropdown-menu-filter'>
                                    <li><button className="dropdown-item">Nombre ASC</button></li>
                                    <li><button className="dropdown-item">Nombre DESC</button></li>
                                    <li><button className="dropdown-item">Categoria ASC</button></li>
                                    <li><button className="dropdown-item">Categoria DESC</button></li>
                                    <li><button className="dropdown-item">Precio ASC</button></li>
                                    <li><button className="dropdown-item">Precio DESC</button></li>
                                    <li><button className="dropdown-item">Modalidad</button></li>
                                </ul>
                            </>)
                            :
                            (<>
                                <button className="btn dropdown-toggle" id='btn-filtrar' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Seleccione región
                                </button>
                                <ul className="dropdown-menu" id='dropdown-menu-filter'>
                                    <li><button className="dropdown-item">Norteamérica</button></li>
                                    <li><button className="dropdown-item">Centroamérica</button></li>
                                    <li><button className="dropdown-item">Sudamérica</button></li>
                                    <li><button className="dropdown-item">Todas las regiones</button></li>
                                </ul>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown