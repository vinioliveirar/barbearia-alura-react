import React from "react";
import Banner from "./Banner/Banner";
import Beneficios from "./Beneficios/Beneficios";
import Carousel from "../Carousel/Carousel";
import style from './Home.module.scss'

export default function Home(){
  return(
    <main>
      <section className={style.sectionMain}>
        <Banner />
        <div className={style.tituloCentral}>
          <h3>
          Sobre a Barbearia Alura
          </h3>
          </div>
          <div className={style.paragrafo}>
            <p>
            <span>
              Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. <br />
              Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.
            </span>
            </p>
            <p>
            <span className={style.spanTwo}>
              Nossa missão é:<strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong> 
            </span>
            </p>
            <p>
              <span>
                Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. <br />
                O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.
              </span>
            </p>
        </div>
      </section>
      <Beneficios />
      <Carousel />
    </main>
  )
}