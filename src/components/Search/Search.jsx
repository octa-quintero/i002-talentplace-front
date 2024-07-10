import React from 'react'
import '../../index.css'
import './Search.css'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
            <div className="d-flex justify-content-between container-search">
                <div className='w-100'>
                    <div id="search-input">
                        <div className="input-group col-md-12">
                            <input type="text" className="search-query form-control" placeholder="Buscar" />
                                <button id="btn-search" type="button">
                                    <BiSearch className='ri-bisearch' />
                                </button>
                        </div>
                    </div>
                </div>
                <div className='container-search__dropdown'>

                    <div id="search-input">
                        <div className='search-query form-control'>
                            <div className="dropdown w-100 d-flex">
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
                            </div>
                        </div>
                </div>
                </div>
            </div>
    )
}

export default Search