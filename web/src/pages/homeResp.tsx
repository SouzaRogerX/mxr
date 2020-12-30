import React from "react";

import Global from "../styles/global"

import Home from "../pages/home/home"

import logoImg from '../images/logo.png'
import imgNatura from '../images/natura.png'
import imgMagalu from '../images/magaluxr.png'
import imgEntrarGrupo from '../images/entraGrupo.png'

const data = [
  {
    id: Math.random(),
    title: "Magazine XRogers",
    text: "Neste grupo exclusivo no WhatsApp todos os dias você encontra as melhores ofertas",
    bgColor: "#FFFFFF",
    link:"",
    img: logoImg,
    alt: "Grupo WhatsApp"
  },
  {
    id: Math.random(),
    title: "Grupo Exclusivo no WhatsApp",
    text: "Neste grupo exclusivo no WhatsApp todos os dias você encontra as melhores ofertas",
    bgColor: "#00E676",
    link:"https://chat.whatsapp.com/5Vg6POBjtch9NUZmg6IgrM",
    img: imgEntrarGrupo,
    alt: "Grupo WhatsApp"
  },
  {
    id: Math.random(),
    title: "Consultoria Natura",
    text: "Aqui você encontra os melhores precos nos produtos Natura",
    bgColor: "#F86D2A",
    link:"https://www.natura.com.br/consultoria/xrogers",
    img: imgNatura,
    alt: "Consultoria Natura"
  },
  {
    id: Math.random(),
    title: "Loja Parceira da Magalu",
    text: "Sabe aquelas melhores ofertas do Magazine Luiza? estão todas aqui!!!",
    bgColor: "#4B83F9",
    link:"https://www.magazinevoce.com.br/magazinexrogers",
    img: imgMagalu,
    alt: "Loja Parceira Magalu"
  }
];

function homeResp() {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default homeResp;