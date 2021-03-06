import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 3000px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  flex: 1;  
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  border-radius: 30px;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 3000px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  flex: 1;  
  color: #333;
  font-size: 3.2rem;
  text-align: center;

  @media (min-width: 3000px) {
    font-size: 1.7rem;
  }
`;

export const BoxText = styled.p`
  flex: 1;  
  margin-top: ${px2vw(20)};
  color: #333;
  font-size: 2.7rem;
  text-align: center;
  margin-top: 20px;
  padding: 0px 0px 10px 0px;


  @media (min-width: 3000px) {
    font-size: 1.0rem;
  }
`;