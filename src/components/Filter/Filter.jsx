import React from 'react'
import './Filter.css'
import '../../index.css'

const Filter = () => {
    return (
        <aside className='container-filter'>
            <div className=" p-3 bg-white container-filter__title">
                <span className="d-flex align-items-center pl-3 pb-3 fs-5 fw-semibold">Filtrá tu búsqueda</span>
                <ul className="list-unstyled ps-0">

                    {/* categorias */}
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#categorias-collapse" aria-expanded="true">
                        Categorías</button>
                        <div className="collapse show" id="categorias-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small d-flex flex-column">
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">It y Programación</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Diseño y Multimedia</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Redacción y Traducción</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Gestión y Finanzas</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Ingeniería y Fabricación</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Ventas y Marketing</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Administración y Soporte</label>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="border-top my-3"></li>

                    {/* modalidad */}
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#modalidad-collapse" aria-expanded="false">
                            Modalidad
                        </button>
                        <div className="collapse" id="modalidad-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small d-flex flex-column">
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Por hora</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Por proyecto</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Flexible</label>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="border-top my-3"></li>

                    {/* idioma */}
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#idioma-collapse" aria-expanded="false">
                            Idioma
                        </button>
                        <div className="collapse" id="idioma-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small d-flex flex-column">
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Español</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Inglés</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Portugués</label>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="border-top my-3"></li>

                    {/* habilidades */}
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#hablidades-collapse" aria-expanded="false">
                            Habilidades
                        </button>
                        <div className="collapse" id="hablidades-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small d-flex flex-column">
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Gestión del Tiempo</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Resolución de Problemas</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Atención al Detalle</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Planificación y Organización</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Habilidades de Negociación</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Edición de Documentos</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Gestión de Redes Sociales</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Edición de Video</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Comunicación</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Trabajo en equipo</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Adaptabilidad</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Pensamiento crítico</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Paciencia y persistencia</label>
                                </li>
                                <li className="d-inline-flex px-2 gap-2 p-1">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Empatía y creatividad</label>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Filter