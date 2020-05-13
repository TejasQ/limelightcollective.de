import React, { FC, useEffect, useState } from "react";

import TwoColumnPageLayout from "./TwoColumnPageLayout";
import Title from "./Title";
import PageContent from "./PageContent";
import SidebarItem from "./SidebarItem";
import SidebarItemContainer from "./SidebarItemContainer";
import styled from "@emotion/styled";
import { FooterResult } from "../types/airtable";
import { Markdown } from "./Markdown";
import Div100vh from "react-div-100vh";
import { css } from "@emotion/core";
import { trackEvent } from "../util/trackEvent";

const ThisPage = styled(Div100vh)`
  position: relative;
`;

const DonateAndContactSection: FC<any> = ({ footerData }) => {
  const [currentPage, setCurrentPage] = useState<"donate" | "contact">("donate");

  const donateNotes = footerData && footerData.find((d: FooterResult["fields"]) => d.Name === "Donate").Notes;
  const contactNotes = footerData && footerData.find((d: FooterResult["fields"]) => d.Name === "Contact").Notes;

  return (
    <ThisPage>
      <TwoColumnPageLayout>
        <div>
          <Title condensed>Donate &amp; Contact</Title>
          <SidebarItemContainer>
            <SidebarItem
              active={currentPage === "donate"}
              onClick={() => {
                trackEvent({ category: "Home", action: "Click on Donate" });
                setCurrentPage("donate");
              }}
            >
              Donate
            </SidebarItem>
            <SidebarItem
              active={currentPage === "contact"}
              onClick={() => {
                trackEvent({ category: "Home", action: "Click on Contact" });
                setCurrentPage("contact");
              }}
            >
              Contact
            </SidebarItem>
          </SidebarItemContainer>
        </div>
        <div
          css={css`
            height: 100%;
            overflow: auto;
            @media (min-width: 768px) {
              height: auto;
            }
          `}
        >
          <PageContent>
            {currentPage === "donate" && (
              <>
                <Title condensed>Donate</Title>
                <Markdown>{donateNotes}</Markdown>
              </>
            )}
            {currentPage === "contact" && (
              <>
                <Title condensed>Contact</Title>
                <Markdown>{contactNotes}</Markdown>
              </>
            )}
          </PageContent>
        </div>
      </TwoColumnPageLayout>
    </ThisPage>
  );
};

export default DonateAndContactSection;
