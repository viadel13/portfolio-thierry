import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import hero2 from '../../assets/images/hero2.jpg'
import hero3 from '../../assets/images/hero3.jpg'
import YouPain from '../../assets/images/you.png'
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Swiper
   
      spaceBetween={30}
      effect={'fade'}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      className="mySwiper"
    >

      <SwiperSlide>
        <img id='slide-Your' src={YouPain} alt="slider 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='hero' src={hero3} alt="slider 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='hero' src={hero2} alt="slider 3" />
      </SwiperSlide>

    </Swiper>
  )
}

export default Hero
