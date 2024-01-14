import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero2 from '../assets/images/hero2.jpg'
import hero3 from '../assets/images/hero3.jpg'
import you from '../assets/images/you.png'

const SlideTest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true, // Activation du fondu
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
    <div className="hero-slide">
      <img src={you} alt="Slide 1" />
    </div>
    <div className="hero-slide">
      <img src={hero2} alt="Slide 2" />
    </div>
    <div className="hero-slide">
      <img src={hero3} alt="Slide 3" />
    </div>
  </Slider>
  )
}

export default SlideTest
