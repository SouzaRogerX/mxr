import React from "react";

import Global from "../styles/global"

import Home from "../pages/home/home"

import logoImg from '../images/logo.png'
import imgEntrarGrupo from '../images/entrarGrupo.png'
import imgNatura from '../images/natura.png'
import imgMagalu from '../images/magaluxr.png'
import imgPicPay from '../images/picPay.png'
import imgRecargaPay from '../images/recargaPay.png'
import imgMercadoPago from '../images/MercadoPago.png'

const data = [
  {
    id: Math.random(),
    title: "Magazine XROGERS",
    text: "Aqui no Magazine XROGERS você encontra os melhores parceiros com condições, ofertas e descontos exclusivos e os melhores aplicativos de pagamento!!!",
    bgColor: "#FFFFFF",
    link:"https://www.facebook.com/MagazineXROGERS",
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
  },
  {
    id: Math.random(),
    title: "PicPay",
    text: "Com o PicPay você recebe e envia dinheiro para outras pessoas, paga contas, estabelecimentos, compra créditos para o celular e muito mais. Na hora, pelo seu celular. Receber Dinheiro. Recarga De Celular. Pagamentos Com QR Code.",
    bgColor: "#38C86E",
    link:"http://www.picpay.com/convite?21UFZG",
    img: imgPicPay,
    alt: "PicPay"
  },
  {
    id: Math.random(),
    title: "RecargaPay",
    text: "Faça sua recarga de celular, seu cartão de transporte ou pague suas contas com total segurança, em segundos e com todos os meios de pagamento. Chega de filas!!! e que tal uma recarga grátis de até R$10?!?!, é só clicar!!!",
    bgColor: "#ffffff",
    link:"https://recargapay.com.br/r/rogsou884-pWV",
    img: imgRecargaPay,
    alt: "RecargaPay"
  },
  {
    id: Math.random(),
    title: "MercadoPago",
    text: "Transferências, Recargas, Maquininha, Link de Pagamento e Ainda Rende Mais que a Poupança. Conta Digital, Recarga, transferência, Soluções de Pagamento e Mais em um único APP! Compre Sua Maquininha. Serviços: Pagamento de Contas, Link de Pagamento.",
    bgColor: "#63C3ED",
    link:"https://www.mercadopago.com.br/point/invite?code=1D4I8",
    img: imgMercadoPago,
    alt: "MercadoPago"
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