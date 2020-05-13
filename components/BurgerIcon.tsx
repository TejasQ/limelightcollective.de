import styled from "@emotion/styled";
import { FC } from "react";
import { trackEvent } from "../util/trackEvent";

export const BurgerIcon: FC<{ onClick: () => void; isActive: boolean }> = ({ onClick, isActive }) => {
  return (
    <Container
      onClick={() => {
        onClick();
        trackEvent({ category: "Navigation", action: "Click on Navigation" });
      }}
    >
      <Patty style={isActive ? { transform: "rotate(45deg) translate(7px, 7px)" } : undefined} />
      <Patty style={isActive ? { opacity: 0 } : undefined} />
      <Patty style={isActive ? { transform: "rotate(-45deg) translate(7px, -7px)" } : undefined} />
    </Container>
  );
};

const Patty = styled.div`
  height: 2px;
  width: 30px;
  background: white;
  margin: 4px auto;
  transition: opacity 0.3s ease, transform 0.6s ease;
`;

const Container = styled.button`
  position: fixed;
  top: 32px;
  right: 32px;
  border: 2px solid white;
  background: black;
  width: 48px;
  height: 48px;
  z-index: 10000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
