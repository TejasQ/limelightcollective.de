import styled from "@emotion/styled";
import { FC, CSSProperties, useState, useRef, useEffect } from "react";

export const SpaceTriangle: FC<{ shade?: boolean; style?: CSSProperties; size: number; content: string }> = ({
  style,
  content,
  size,
  shade,
}) => {
  return (
    <Container shade={Boolean(shade)} style={style} size={size}>
      <Board>
        <BoardChild>
          {content}
          {content}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </BoardChild>
      </Board>
    </Container>
  );
};

const BoardChild = styled.div`
  transform: rotateX(-33deg) rotateY(0deg);
  width: calc(100% - 91px);
  margin: 0 auto;
  padding: 16px;
  height: 320px;
  overflow: auto;
`;

const Board = styled.div`
  position: relative;
  -webkit-perspective: 278px;
  perspective: 278px;
`;
const Container = styled.div<{ shade: boolean; size: number }>`
  position: relative;

  ::after {
    content: ${({ shade }) => (shade ? '""' : "")};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 450px;
    background: linear-gradient(180deg, transparent, black, black, black);
    pointer-events: none;
  }
  -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  overflow: hidden;
  padding: 20px 40px 100%;
  line-height: 32px;
  z-index: 100;
  font-size: 1rem;
  background: black;
`;
