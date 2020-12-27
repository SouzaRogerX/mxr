import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css'

import logoImg from './images/logo.png'
import imgNatura from './images/natura.png'
import imgMagalu from './images/magalu.png'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">

        <img src={logoImg} alt="Magazine XRogers" />

        <main>
          <h1>Aqui você encontra os melhores produtos com os melhores descontos</h1>
          <p>Consultoria dos produtos Natura</p>
          <p>Loja parceira do Magazine Luiza</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>Salto de Pirapora</span>
        </div>

        <a href="https://www.natura.com.br/consultoria/xrogers" target="_blank" className="enter-natura">
          <img src={imgNatura} alt="Consultoria Natura" />
        </a>

        <a href="https://www.magazinevoce.com.br/magazinexrogers" target="_blank" className="enter-magalu">
          <img src={imgMagalu} alt="Loja Parceira Magalu" />
        </a>

      </div>
    </div>
  );
}

export default App;