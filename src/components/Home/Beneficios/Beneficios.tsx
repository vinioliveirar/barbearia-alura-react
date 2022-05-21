import React from "react";
import style from './Beneficios.module.scss'

export default function Beneficios(){
  return(
    <section className={style.section}>
      <div className={style.titulo}>
        <h3>Benefícios</h3>
      </div>
      <div className={style.divItens}>
        <ul className={style.ulItens}>
          <li className={style.liItens}>Atendimento Diferenciado</li>
          <li className={style.liItens}>Espaço Diferenciado</li>
          <li className={style.liItens}>Localização</li>
          <li className={style.liItens}>Profissionais Qualificados</li>
        </ul>
      </div>
      <div>
        
      </div>
    </section>
    
  )
}