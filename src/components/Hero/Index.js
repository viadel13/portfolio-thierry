import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';
import YouPain from '../../assets/images/you.png';
import Slider from 'react-slick';
import { Avatar, Box } from '@mui/material';


const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className='slider'>
      <Box sx={{ width: '100%', height: '100vh'}}>
        <Avatar
          sx={{
            borderRadius: 0,
            width: '100%',
            height: { xs: '50vh', sm: '60vh', md: '100vh' },
            display: 'block',
            filter: 'brightness(0.3) contrast(0.9)',
   

          }}
          src={hero2}
          alt='hero1'
        />
      </Box>
      <Box sx={{ width: '100%', height: '100vh'}}>
        <Avatar
          sx={{
            borderRadius: 0,
            width: '100%',
            height: { xs: '50vh', sm: '60vh', md: '100vh' },
            display: 'block',
            filter: 'brightness(0.3) contrast(0.9)',

          }}
          src={hero3}
          alt='hero1'
        />
      </Box>
      <Box sx={{ width: '100%', height: '100vh',}}>
        <Avatar
          sx={{
            borderRadius: 0,
            width: '100%',
            height: { xs: '50vh', sm: '60vh', md: '100vh' },
            display: 'block',
            backgroundColor: 'rgba(3, 3, 3, 0.349)',
      
          }}
          src={YouPain}
          alt='hero1'
        />
      </Box>

    </Slider>
  );
};

export default Hero;
