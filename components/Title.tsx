import styled from "@emotion/styled";

const Title = styled.h1<{ condensed?: boolean }>`
  position: relative;
  font-size: 40px;
  letter-spacing: ${({ condensed }) => (condensed ? "initial" : 16)}px;
  text-transform: uppercase;
  z-index: 100;
`;

export default Title;
