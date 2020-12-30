import React from "react";

import Global from "../styles/global"

import Home from "../pages/home/home"

import logoImg from '../images/logo.png'
import imgNatura from '../images/natura.png'
import imgMagalu from '../images/magaluxr.png'
import imgEntrarGrupo from '../images/entrarGrupo.png'

const data = [
  {
    id: Math.random(),
    title: "Magazine XROGERS",
    text: "Aqui no Magazine XROGERS você encontra os melhores parceiros com condições, ofertas e descontos exclusivos e os melhores aplicativos de pagamento!!!",
    bgColor: "#FFFFFF",
    link:"",
    img: logoImg,
    alt: "Grupo WhatsApp"
  },
  {
    id: Math.random(),
    title: "Grupo Exclusivo no WhatsApp",
    text: "Entre no grupo exclusivo ''Ofertas XROGERS'' no WhatsApp e fique sabendo primeiro das melhores ofertas e descontos exclusivos!!!",
    bgColor: "#00E676",
    link:"https://chat.whatsapp.com/5Vg6POBjtch9NUZmg6IgrM?lang=pt_br",
    img: imgEntrarGrupo,
    alt: "Grupo WhatsApp"
  },
  {
    id: Math.random(),
    title: "Consultoria Natura",
    text: "Conheça as fragrâncias da Casa da Perfumaria do Brasil que além de possuir a maior variedade de perfumes exclusivos, também conta com cosméticos, maquiagens, cabelos e presentes. E no consultor XROGERS você encontra descontos exclusivos!!!",
    bgColor: "#F86D2A",
    link:"https://www.natura.com.br/consultoria/xrogers",
    img: imgNatura,
    alt: "Consultoria Natura"
  },
  {
    id: Math.random(),
    title: "Loja Parceira da Magalu",
    text: "As melhores ofertas em móveis, eletrônicos, eletrodomésticos, informática e muito mais do Magazine Luiza, você encontra aqui na loja parceira XROGERS!!!",
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