import styled from "@emotion/styled";
import { FC, CSSProperties, ReactNode } from "react";

export const SpaceTriangle: FC<{
  shade?: boolean;
  style?: CSSProperties;
  size: { desktop: number; mobile: number };
  content: ReactNode;
  className?: string;
}> = ({ style, content, size, shade, className }) => {
  return (
    <Container className={className} shade={Boolean(shade)} style={style} size={size}>
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
  transform: rotateX(-44deg) rotateY(0deg) scale(0.8);
  width: 100%;
  margin: 0 auto;
  padding: 6vw 16vw;
  height: calc(100vw - 16px);
  overflow: auto;

  @media (min-width: 768px) {
    transform: translateY(9px) rotateX(-44deg) rotateY(0deg) scale(0.8);
    width: calc(100% - 91px);
    margin: 0 auto;
    padding: 16px 39px;
    height: 560px;
    overflow: auto;
  }
`;

const Board = styled.div`
  position: relative;
  perspective: 46vw;

  @media (min-width: 768px) {
    perspective: 278px;
  }
`;
const Container = styled.div<{ shade: boolean; size: { desktop: number; mobile: number } }>`
  position: relative;
  height: calc(100vw - 16px);
  width: calc(100vw - 16px);
  -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  overflow: hidden;
  padding: 20px 40px 100%;
  line-height: 32px;
  z-index: 100;
  font-size: 1rem;
  background: black;

  @media (min-width: 768px) {
    height: ${({ size }) => size.desktop}px;
    width: ${({ size }) => size.desktop}px;
  }

  ::after {
    content: ${({ shade }) => (shade ? '""' : "")};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 450px;
    pointer-events: none;
    background: linear-gradient(180deg, transparent 71vw, black 79vw);

    @media (min-width: 768px) {
      background: linear-gradient(180deg, transparent, black 66%);
    }
  }
`;
