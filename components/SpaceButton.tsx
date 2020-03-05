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

  :hover {
    background-image: url("/images/space-hover.png");
  }
`;

const SpaceButton = () => (
  <Link href="/space">
    <Container>Space</Container>
  </Link>
);

export default SpaceButton;
