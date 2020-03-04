import React, { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const Footer: FC = () => (
  <Container>
    <div>
      <div>LOGO</div>
      <div>&copy; THE LIMELIGHT COLLECTIVE | DESIGN: MFW.DESIGN.COM | IMPRESSUM | DATENSCHUTZ</div>
    </div>
  </Container>
);

export default Footer;
