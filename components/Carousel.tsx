import React from "react";
import styled from "@emotion/styled";
import { FC } from "react";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  max-width: 1028px;
  margin: 0 auto;
  grid-template-columns: 40px auto 40px;
  gap: 32px;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
`;

const ItemContainer = styled.div`
  position: relative;
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
