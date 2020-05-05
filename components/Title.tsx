import styled from "@emotion/styled";

const Title = styled.h1<{ condensed?: boolean }>`
  position: relative;
  font-family: heading;
  font-style: italic;
  font-weight: 300;
  letter-spacing: ${({ condensed }) => (condensed ? "initial" : 7)}px;
  text-transform: uppercase;
  z-index: 100;
  word-wrap: break-word;

  @media (min-width: 768px) {
    letter-spacing: ${({ condensed }) => (condensed ? "initial" : 16)}px;
    font-size: 48px;
  }
`;

export default Title;
