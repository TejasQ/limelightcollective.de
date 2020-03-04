import styled from "@emotion/styled";

const SpaceTriangle = styled.div<{ size: number }>`
  position: relative;
  -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  overflow: auto;
  padding: 20px 40px 100%;
  line-height: 32px;
  z-index: 100;
  font-size: 1rem;
  background: black;
`;

export default SpaceTriangle;
