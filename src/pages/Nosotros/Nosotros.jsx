import React from 'react'
import { BsLightbulb } from "react-icons/bs";
import { PiSuitcaseSimple } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import CardInfo from '../../components/CardInfo/CardInfo';
import { Accordion } from 'react-bootstrap';
import './Nosotros.css'



export const Nosotros = () => {

    const infoObjetivos = [
        {
            id: 1,
            title: "Facilitar Conexiones",
            text: "Ayudar a los profesionales juniors a encontrar trabajos que se alineen con sus habilidades y objetivos profesionales."
        },
        {
            id: 2,
            title: "Ofrecer Oportunidades Reales",
            text: "Proporcionar a los empleadores acceso a un pool de talento emergente y cualificado."
        },
        {
            id: 3,
            title: "Seguridad y Confianza",
            text: "Garantizar un entorno seguro y confiable para que los juniors puedan trabajar con tranquilidad."
        }
    ]

    return (
        <main className='px-3 text-center'>
            <section className='nosotros-head__container'>
                <h1 className='my-4'>TALENTPLACE</h1>
                <p className='px-5 fs-5'>TalentPlace es una plataforma innovadora diseñada para conectar a freelancers y empleadores de todo el mundo. Nuestra misión es ofrecer oportunidades reales y significativas tanto para quienes buscan trabajo como para quienes necesitan talento especializado.</p>
                <div className= 'd-flex flex-row nosotros-head text-center py-5 justify-content-evenly flex-sm-wrap'>
                    <div className='w-25 text-center'>
                        <BiWorld class="nosotros-head__icon"/>
                        <p>Conectamos el talento con 
                        las oportunidades</p>
                    </div>
                    <div className='w-25'>
                        <BsLightbulb class="nosotros-head__icon"/>
                        <p>Nos reinventamos para brindarte
                        un servicio excepcional</p>
                    </div>
                    <div className='w-25'>
                        <PiSuitcaseSimple class="nosotros-head__icon"/>
                        <p>Ofrecemos oportunidades laborales 
                        reales y significativas</p>
                    </div>
                </div>
                <h5 className='px-5 fs-5'>Fundada en 2024, TalentPlace nació con la visión de facilitar la entrada al mercado laboral para los profesionales juniors. Hoy en día, somos una plataforma confiable para miles de juniors y empleadores que confían en nosotros para llevar a cabo sus proyectos con éxito.</h5>
            </section>
            <section>
                <h3 className='my-4 pt-4'>Nuestros objetivos</h3>
                <div className='d-flex px-5 justify-content-evenly py-3 gap-5 w-100 cardInfo-container'>
                    {infoObjetivos.map(({id, title, text})=>(
                        <CardInfo key={id} title={title} text={text} paddingTop="p-4" />
                    ))}
                </div>
            </section>
            <section className='nosotros-section3'>
                <h3 className='my-4 pt-4'>Cargos y tarifas</h3>
                <h5>En TalentPlace, nos aseguramos de que tanto Empleados como Empleadores comprendan claramente nuestras tarifas y comisiones.</h5>
                <div cl>
                    <CardInfo />
                    <CardInfo />
                </div>
            </section>
            <section>
                <h3 className='my-4 pt-4'>Membresías en TalentPlace</h3>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
            <section>
                <h5 className='my-4 pt-4'>Mapa del sitio</h5>

            </section>
        </main>
    )
}

//! BUSCAR REACT COMPONENT

export default Nosotros