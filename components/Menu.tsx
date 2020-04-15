import React, { FC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

export const Menu: FC<{ close: () => void }> = ({ close }) => {
  return (
    <Container>
      <Content>
        <Link href="/">
          <Item onClick={close}>Home</Item>
        </Link>
        <Link href="/community">
          <Item onClick={close}>Community</Item>
        </Link>
        <Link href="/arts">
          <Item onClick={close}>Arts</Item>
        </Link>
        <Link href="/space">
          <Item onClick={close}>Space</Item>
        </Link>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0006;
  backdrop-filter: blur(10px);
  z-index: 30000;
  animation: 0.6s fadeIn ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(16px);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
`;

const Content = styled.div`
  display: grid;
  place-items: center;
  place-content: center;
  height: 100vh;
  gap: 32px;
`;

const Item = styled.button`
  appearance: none;
  border: 2px solid white;
  font-size: 3rem;
  color: white;
  font-style: italic;
  background: #0006;
  font-family: heading;
`;
