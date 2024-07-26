
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";
import { BiCog, BiGitPullRequest } from "react-icons/bi";
import { TfiMarkerAlt } from "react-icons/tfi";
import { MdTranslate } from "react-icons/md";
import { PiChartLineBold } from "react-icons/pi";
import Bullhorn from "../../assets/assets-svg/Bullhorn.svg"
import Admin from "../../assets/assets-svg/Admin.svg"
import '../Carousel/CardCarousel.css'
import { Fade } from "react-awesome-reveal";


export default function CardCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3.3,
          infinite: true,
          dots: true,
        }
      },
    ]
  };


  return (
    
      <Slider {...settings} className='custom-slider'>
        <div>
          <Fade triggerOnce="true" direction="left">
            <Card Icon={BiGitPullRequest} container="bg-white" type='large' alt="It y programación" title="It y Programación"/>
          </Fade>
        </div>
        <div>
          <Fade triggerOnce="true" delay="20" direction="left">
            <Card Icon={TfiMarkerAlt} container="bg-white" type='large' alt="Diseño y Multimedia" title="Diseño y Multimedia"/>
          </Fade>
        </div>
        <div>
          <Fade triggerOnce="true" delay="40" direction="left">
            <Card Icon={MdTranslate} container="bg-white" type='large' alt="Redacción y Traducción" title="Redacción y Traducción"/>
          </Fade>
        </div>
        <div>
          <Fade triggerOnce="true" delay="60" direction="left">
            <Card Icon={PiChartLineBold} container="bg-white" type='large' alt="Gestión y Finanzas" title="Gestión y Finanzas"/>
          </Fade>
        </div>
        <div>
          <Fade triggerOnce="true" delay="80" direction="left">
            <Card Icon={BiCog} container="bg-white" type='large' alt="Ingeniería y Fabricación" title="Ingeniería y Fabricación"/>
          </Fade>
        </div>
        <div>
          <Fade triggerOnce="true" delay="100" direction="left">
            <Card imgSrc={Bullhorn} container="bg-white" type='large' alt="Ventas y Marketing" title="Ventas y Marketing"/>
          </Fade>
        </div> 
        <div>
          <Fade triggerOnce="true" delay="120" direction="left">
            <Card imgSrc={Admin} container="bg-white" type='large' alt="Administración y Soporte" title="Administración y Soporte"/>
          </Fade>
        </div> 
      </Slider>
  );
}