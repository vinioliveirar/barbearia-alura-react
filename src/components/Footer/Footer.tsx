import React from "react";
import LogoFooter from '../../assets/logo-branco.png'
import style from './Footer.module.scss'

export default function Footer(){
  return(
    <footer className={style.footer}>
      <div>
        <img src={LogoFooter} alt="" />
        <p className={style.copyright}>&copy; Copyright Barbearia Alura - ReactJS - Vinicius Oliveira</p>
      </div>
    </footer>
  )
}
