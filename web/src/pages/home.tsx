import React from 'react'

import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/home.css'

import logoImg from '../images/logo.png'
import imgMagalu from '../images/magalu.png'
import imgNatura from '../images/natura.png'

function home() {
  return (
    <div id="page-home">
      <div className="content-wrapper">
        <img src={logoImg} alt="Magazine XRogers" />
        <main>
          <h1>
            <a href="https://www.magazinevoce.com.br/magazinexrogers">
              <img src={imgMagalu} alt="Loja Parceira Magalu" />
            </a>
          </h1>
          <p>Loja parceira do Magazine Luiza</p>
        </main>
        <div className="location">
          <strong>
            <a href="https://www.natura.com.br/consultoria/xrogers">
              <img src={imgNatura} alt="Consultoria Natura" />
            </a>
          </strong>
          <span>Consultoria Natura</span>
        </div>
        <a href="https://www.google.com.br" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default home;