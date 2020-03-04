import React from "react";
import styled from "@emotion/styled";
import { FC } from "react";

const Container = styled.div`
  display: grid;
  max-width: 1028px;
  margin: 0 auto;
  grid-template-columns: 40px auto 40px;
  gap: 32px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  height: 100%;
`;

const Carousel: FC = ({ children }) => {
  return (
    <Container>
      <div>&larr;</div>
      <ItemContainer>{children}</ItemContainer>
      <div>&rarr;</div>
    </Container>
  );
};

export default Carousel;
