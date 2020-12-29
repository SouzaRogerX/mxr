import React from "react";

import { Container, Box, BoxTitle, BoxText } from "./homeStyles";

export default function Home({ boxData }) {
  return (
    <Container>
      {boxData.map(box => (
        <Box key={box.id} bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
          <a href={box.link}>
              <img src={box.img} alt={box.alt} />
            </a>
        </Box>
      ))}
    </Container>
  );
}