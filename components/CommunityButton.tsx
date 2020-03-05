import styled from "@emotion/styled";
import Link from "next/link";

import Ball from "./Ball";
import { createFloatAnimation } from "../util/createFloatAnimation";
import { getRandomNumber } from "../util/getRandomNumber";

const Container = styled(Ball)`
  width: 200px;
  height: 200px;
  transform: translate(-180%, -155%);
  border: 0;
  background-image: url("/images/community-normal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200%;
  cursor: pointer;
  color: transparent;
  animation: ${createFloatAnimation()} ${getRandomNumber(10, 20)}s linear alternate infinite;

  :hover {
    background-image: url("/images/community-hover.png");
  }
`;

const CommunityButton = () => (
  <Link href="/community">
    <Container>Community</Container>
  </Link>
);

export default CommunityButton;
