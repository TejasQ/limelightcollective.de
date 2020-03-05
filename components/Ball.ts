import styled from "@emotion/styled";

const Ball = styled.div<{ size?: string }>`
  position: absolute;
  width: ${({ size }) => size || "300px"};
  height: ${({ size }) => size || "300px"};
  display: flex;
  place-content: center;
  place-items: center;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-100%);
  border: 2px solid white;
  color: white;
  border-radius: 50%;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

export default Ball;
