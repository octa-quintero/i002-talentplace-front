import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import "../LandingPage/LandingPage.css"
import { BiGitPullRequest } from 'react-icons/bi'
import { TfiMarkerAlt } from 'react-icons/tfi'
import { PiHandCoins } from 'react-icons/pi'
import { MdTranslate } from 'react-icons/md'
import CardCarousel from '../../components/Carousel/CardCarousel'
import {FaBriefcase, FaUserGraduate} from 'react-icons/fa'
import { Fade } from 'react-awesome-reveal'
import { useUserContext } from "../../context/UserProvider";


export const LandingPage = () => {
  const { token } = useUserContext();


  return (
    <Fade>
      <div className="landing-page d-flex flex-column asd">
        <section className="container-fluid section1 mb-5">
          <div className="row h-100">
            <div className="col-12 col-md-6  section1-left-container">
              <div className='d-flex h-100 flex-column justify-content-between'>
                <div className="row mt-5">
                    <div className='col-6 col-md-3'>
                  <Fade triggerOnce="true">
                      <Card Icon={BiGitPullRequest} type='small' alt="IT" title="It"/>
                  </Fade>
                    </div>
                  <div className='col-6 col-md-3'>
                  <Fade delay="20" triggerOnce="true">
                    <Card Icon={TfiMarkerAlt} type='small' alt="Diseño" title="Diseño"/>
                  </Fade>
                  </div>
                  <div className='col-6 col-md-3'>
                  <Fade delay="40" triggerOnce="true">
                    <Card Icon={PiHandCoins} type='small' alt="Marketing" title="Marketing"/>
                  </Fade>
                  </div>
                  <div className='col-6 col-md-3'>
                  <Fade delay="80" triggerOnce="true">
                    <Card Icon={MdTranslate} type='small' alt="Traducción" title="Traducción"/>
                  </Fade>
                  </div>
                </div>  
                <div className="row">
                  <div className='col-md-12'>
                    <p className="hero-text text-center mx-2">En TalentPlace, ofrecemos una amplia variedad de categorías y la posibilidad de personalizar tu perfil para compartir tus proyectos propios y colaborativos, facilitando que te encuentren. Y si buscas contratar, mantenete al tanto a estas  variedad de opciones.</p>
                  </div>
                </div>
                <div className="row-md-12 ">
                  <div className='col'>
                    <Button type="white" to="/proyectos">Tus Proyectos</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 pe-0  section1-right-container">
              <div className='d-flex h-100 flex-column justify-content-between bg-white section1-right'>
                <div className='row'>
                  <p>Tu talento, nuestra plataforma. Juntos, hacemos grandes cosas.</p>
                </div>
                <div className='row'>
                  <h1>TALENTPLACE</h1>
                </div>
                <div className='row '>
                  <p>En TalentPlace, los juniors encuentran oportunidades reales. Aquí son tomados en serio y consiguen trabajos auténticos que valoran su verdadero talento y potencial.</p>
                </div>
                <div className='row '>
                    <div className='col-md-12 col-lg-6 sm-pb-1'>
                      <Fade delay="40" triggerOnce="true" direction='up'>
                        <Button type='primary'  to="/opportunities">Busco Trabajar</Button>
                      </Fade>
                    </div>
                    <div className='col-md-12 col-lg-6'>
                      <Fade delay="80" triggerOnce="true"direction='up'>
                        {token?
                          <Button type='secondary' to="/dashboard/projects">Ir a mi tablero</Button>
                        :
                          <Button type='secondary' to="/login">Busco Contratar</Button>
                        }
                      </Fade>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container-fluid section2 p-5 d-flex align-items-center justify-content-center'>
          <div className='row text-center w-75 section2-svgs'>
            <div className='col-12 section2-content'>
              <h1 className='mb-4'>TalentPlace es el lugar ideal para trabajar ágilmente. Ya sea que estés contratando o seas freelancer, encontrarás lo que necesitas aquí.</h1>
              <Fade triggerOnce="true" direction='up'>
                <Button className="section2-button" width="auto" type='primary' to="/register">Forma parte aquí</Button>
              </Fade>
            </div>
          </div>
        </section>
        <section className='container-fluid section3'>
          <div className='row py-4'>
            <div className='col-md-12 p-0 '>
              <h1 className='text-center pb-4'>Descubre profesionales talentosos con las habilidades que necesitas</h1>
              <CardCarousel/>
            </div>
          </div>
        </section>
        <section className='container-fluid section4 pt-4 pb-5 mb-5'>
          <div className='svg3'></div>
          <div className='row'>
            <div className='col-sm-12 col-md-6 md-pe-sec4 p-0 '>
              <Fade direction="left" delay="50" triggerOnce="true">
                <div className='d-flex align-items-center jce pe-sec4'>
                  <div className='contratar d-flex flex-column align-items-center justify-content-center'>
                    <div className='icon-container d-flex align-items-center justify-content-center bg-white mb-4 mt-5'>
                      <FaBriefcase className='icons'/>
                    </div>
                    <Button width='auto'type="primary">Aprende a contratar</Button>
                    <div className='text-center w-75 p-2 pt-4 mb-3'>
                      <p>Contrata de forma 100% segura.</p>
                      <p>Encuentra múltiples ofertas que se adapten a tu proyecto.</p>
                      <p>Conecta con talento verificado de nuestro banco de Talentos.</p>
                      <p>Sin problemas ni complicaciones, nosotros nos encargamos de todo.</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className='col-sm-12 col-md-6 p-0 '>
              <Fade direction="left" triggerOnce="true">
                <div className='d-flex align-items-center jcs ps-sec4'>
                  <div className='trabajar d-flex flex-column align-items-center justify-content-center'>
                    <div className='icon-container d-flex align-items-center justify-content-center bg-white mb-4 mt-5'>
                      <FaUserGraduate className='icons'/>
                    </div>
                    <Button width='auto' type="primary" to="/opportunities">Aprende a trabajar</Button>
                    <div className='text-center w-75 p-2 pt-4 mb-3'>
                      <p>Tú pones tu talento, nosotros nos encargamos de recompensarte por ello.</p>
                      <p>Al formar parte, te aseguramos múltiples oportunidades.</p>
                      <p>Aquí eres uno en un millón. Tu perfil personalizado te da una identidad única.</p>
                      <p>Trabajo fiable con tarifas fijas.</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  )
}
