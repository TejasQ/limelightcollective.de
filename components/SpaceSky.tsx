import React, { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: url("/images/space-bg.jpg");
  background-size: cover;
  height: 100vh;
`;

export const SpaceSky: FC = () => <Container></Container>;
