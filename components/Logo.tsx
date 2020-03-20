import React, { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.img`
  width: 100%;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  pointer-events: none;
`;

const Logo: FC = () => (
  <Container alt="The Limelight Collective - Ein Projekt Der Heilsarmee" src="/images/hero2.png"></Container>
);

export default Logo;
