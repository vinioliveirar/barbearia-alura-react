import React from "react";
import style from './Banner.module.scss'
import BannerLogo from '../../../assets/banner.jpg'

export default function Banner(){
  return(
    <section>
      <h2>
        <img className={style.img} src={BannerLogo} alt="" />
      </h2>
    </section>
  )
}