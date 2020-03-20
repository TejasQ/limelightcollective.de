import React, { FC } from "react";

import TwoColumnPageLayout from "./TwoColumnPageLayout";
import Page from "./Page";
import Title from "./Title";
import PageContent from "./PageContent";
import SidebarItem from "./SidebarItem";
import SidebarItemContainer from "./SidebarItemContainer";
import Footer from "./Footer";
import styled from "@emotion/styled";

const ThisPage = styled(Page)``;

const DonateAndContactSection: FC<{ currentPage?: "donate" | "contact" }> = ({ currentPage = "donate" }) => (
  <ThisPage>
    <TwoColumnPageLayout>
      <div>
        <Title condensed>Donate &amp; Contact</Title>
        <SidebarItemContainer>
          <SidebarItem>Donate</SidebarItem>
          <SidebarItem onClick={() => (window.location.href = "mailto:info@limelight.de")}>Contact</SidebarItem>
        </SidebarItemContainer>
      </div>
      <div>
        <PageContent>
          {currentPage === "donate" && (
            <>
              {" "}
              <Title condensed>Donate</Title>
              <p>
                As a non-profit project, The Limelight Collective is dependent on donations to finance the work we do.
                The Limelight Collective is a project of the Salvation Army (Die Heilsarmee i. D. KdöR), a certified
                member of the Deutsche Spendenrat, a donation transparency regulator.
              </p>
              <p>We are grateful for your tax-deductible donations:</p>
              <p>Donate.limelightcollective.de</p>
              <p>DE29 1001 0010 0636 5181 04</p>
              <p>or DONATE NOW</p>
            </>
          )}
          {currentPage === "contact" && (
            <>
              {" "}
              <Title condensed>Contact</Title>
              I don't blame you much for wanting to be free
              <br />I just wanted you to know
            </>
          )}
        </PageContent>
      </div>
    </TwoColumnPageLayout>
    <Footer />
  </ThisPage>
);

export default DonateAndContactSection;
