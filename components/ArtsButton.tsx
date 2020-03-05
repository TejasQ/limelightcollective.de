import styled from "@emotion/styled";
import Link from "next/link";

import Ball from "./Ball";
import { createFloatAnimation } from "../util/createFloatAnimation";
import { getRandomNumber } from "../util/getRandomNumber";

const Container = styled(Ball)`
  width: 240px;
  height: 240px;
  transform: translate(132%, -65%);
  border: 0;
  padding: 0;
  color: #0000;
  background-image: url("/images/arts-normal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200%;
  cursor: pointer;
  animation: ${createFloatAnimation()} ${getRandomNumber(10, 20)}s linear alternate infinite;

  :hover {
    background-image: url("/images/arts-hover.png");
  }
`;

const ArtsButton = () => (
  <Link href="/arts">
    <Container>Arts</Container>
  </Link>
);

export default ArtsButton;
