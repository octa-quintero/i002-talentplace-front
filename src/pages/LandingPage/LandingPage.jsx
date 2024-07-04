import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import "../LandingPage/LandingPage.css"
import { BiGitPullRequest } from 'react-icons/bi'
import { TfiMarkerAlt } from 'react-icons/tfi'
import { PiHandCoins } from 'react-icons/pi'
import { MdTranslate } from 'react-icons/md'




export const LandingPage = () => {
  return (
    <div className="landing-page d-flex flex-column">
      <section className="container-fluid section1 mb-5">
        <div className="row h-100">
          <div className="col-md-6 col-sm-12 pe-5 section1-left">
            <div className='d-flex h-100 flex-column justify-content-between'>
              <div className="row mt-5">
                <div className='col-md-3'>
                  <Card Icon={BiGitPullRequest} type='small' alt="IT" title="It"/>
                </div>
                <div className='col-md-3'>
                  <Card Icon={TfiMarkerAlt} type='small' alt="Diseño" title="Diseño"/>
                </div>
                <div className='col-md-3'>
                  <Card Icon={PiHandCoins} type='small' alt="Marketing" title="Marketing"/>
                </div>
                <div className='col-md-3'>
                  <Card Icon={MdTranslate} type='small' alt="Traducción" title="Traducción"/>
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
          <div className="col-md-6 col-sm-12 pe-0 ps-5">
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
              <div className='row me-5'>
                  <div className='col-md-12 col-lg-6'>
                    <Button type='primary'  to="/oportunidades">Busco Trabajar</Button>
                  </div>
                  <div className='col-md-12 col-lg-6'>
                    <Button type='secondary'  to="/talentos#">Busco Contratar</Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid section2 d-flex align-items-center justify-content-center'>
        <div className='row text-center w-75 section2-svgs'>
          <div className='col-12 section2-content'>
            <h1 className='mb-4'>TalentPlace es el lugar ideal para trabajar ágilmente. Ya sea que estés contratando o seas freelancer, encontrarás lo que necesitas aquí.</h1>
            <Button className="section2-button" width="17%" type='primary'>Forma parte aquí</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
