import { Autoplay, Navigation } from "swiper";
import React, { ReactNode } from "react";
import {Swiper, SwiperProps, } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css'

interface SliderProps{
  
  settings: SwiperProps
  children: ReactNode
}
export default function Slider({ settings,children }: SliderProps){
  return(
    <Swiper modules={[Navigation, Autoplay]} {...settings}>{children}</Swiper>
  )
}