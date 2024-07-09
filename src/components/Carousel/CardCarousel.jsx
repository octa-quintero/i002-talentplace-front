
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


export default function CardCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    swipeToSlide: true,
    arrows: false
  };
  return (
    
      <Slider {...settings}>
        <div>
          <Card Icon={BiGitPullRequest} type='large' alt="It y programación" title="It y Programación"/>
        </div>
        <div>
          <Card Icon={TfiMarkerAlt} type='large' alt="Diseño y Multimedia" title="Diseño y Multimedia"/>
        </div>
        <div>
          <Card Icon={MdTranslate} type='large' alt="Redacción y Traducción" title="Redacción y Traducción"/>
        </div>
        <div>
          <Card Icon={PiChartLineBold} type='large' alt="Gestión y Finanzas" title="Gestión y Finanzas"/>
        </div>
        <div>
          <Card Icon={BiCog} type='large' alt="Ingeniería y Fabricación" title="Ingeniería y Fabricación"/>
        </div>
        <div>
          <Card imgSrc={Bullhorn} type='large' alt="Ventas y Marketing" title="Ventas y Marketing"/>
        </div> 
        <div>
          <Card imgSrc={Admin} type='large' alt="Administración y Soporte" title="Administración y Soporte"/>
        </div> 
      </Slider>
    
  );
}