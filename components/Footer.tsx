import React, { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url("/images/footer.png");
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center 60px;
  padding-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const Footer: FC = () => (
  <Container>
    <div>
      <div>&copy; THE LIMELIGHT COLLECTIVE | DESIGN: MFW.DESIGN.COM | IMPRESSUM | DATENSCHUTZ</div>
    </div>
  </Container>
);

export default Footer;
