import React, { FC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import Ball from "./Ball";
import { createFloatAnimation } from "../util/createFloatAnimation";
import { getRandomNumber } from "../util/getRandomNumber";

const Container = styled(Ball)`
  width: 140px;
  height: 140px;
  transform: translate(160%, -265%);
  border: 0;
  background-image: url("/images/space-normal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200%;
  cursor: pointer;
  color: transparent;
  animation: ${createFloatAnimation()} ${getRandomNumber(10, 20)}s linear alternate infinite;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
    background-color: transparent;
    background-image: url("/images/space-hover.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 200%;
  }
  :hover::after {
    opacity: 1;
  }
`;

const SpaceButton = () => (
  <Link href="/space">
    <Container>Space</Container>
  </Link>
);

export default SpaceButton;
