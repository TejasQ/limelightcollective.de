import React, { FC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

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
      <div>
        &copy; THE LIMELIGHT COLLECTIVE | DESIGN:{" "}
        <a href="https://mfw.design.com" target="blank" rel="nofollow noreferrer noopener">
          MFW.DESIGN.COM
        </a>{" "}
        | <Link href="/impressum-datenschutz">IMPRESSUM</Link> | <Link href="/impressum-datenschutz">DATENSCHUTZ</Link>
      </div>
    </div>
  </Container>
);

export default Footer;
