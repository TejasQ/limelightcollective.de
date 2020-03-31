import styled from "@emotion/styled";

const Title = styled.h1<{ condensed?: boolean }>`
  position: relative;
  font-family: heading;
  font-style: italic;
  font-size: 48px;
  font-weight: 300;
  letter-spacing: ${({ condensed }) => (condensed ? "initial" : 16)}px;
  text-transform: uppercase;
  z-index: 100;
  word-wrap: break-word;
`;

export default Title;
