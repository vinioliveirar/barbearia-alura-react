/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState } from "react";
import style from './Header.module.scss'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

function Header(){
  const [isOpen, setIsOpen] = useState(false)
  return(
    <header className={style.header}>
      <nav className={style.nav}>
        <div>
          <h1>
            <img className={style.img} src={Logo} alt="Logo" />
          </h1>
        </div>

        <div>
          <ul className={isOpen ? style.open : style.close} aria-expanded={isOpen}>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/produtos'>Produtos</Link></li>
            <li><Link to="/">Contato</Link></li>
          </ul>
        </div>
        <div className={style.btnMobile}>
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Fechar' : 'Menu'}</button>
        </div>
      </nav>
    </header>
  )
}

export default Header;