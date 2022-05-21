import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "./Slider/Slider";
import SlideUm from '../Carousel/img/img-1.jpg'
import SlideDois from '../Carousel/img/img-2.jpg'
import SlideT from '../Carousel/img/img-3.jpg'
import SlideQ from '../Carousel/img/img-4.jpg'
import style from './Carousel.module.scss'

export default function Carousel(){
  const settings = {
    spaceBetween: 75,
    navigation: true,
    autoplay: true
  }
  
  return(
    <section>
      <Slider settings={settings}>
        <SwiperSlide>
          <img className={style.img} src={SlideUm} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.img} src={SlideDois} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.img} src={SlideT} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.img} src={SlideQ} alt="" />
        </SwiperSlide>
      </Slider>
    </section>
  )
}