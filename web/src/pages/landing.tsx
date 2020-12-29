import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/landing.css'

import logoImg from '../images/logo.png'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">

        <img src={logoImg} alt="Magazine XRogers" />

        <main>
          <h1>Leve felicidade para o mundo </h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>Salto de Pirapora</span>
        </div>

        <a href="https://www.google.com.br" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default Landing;