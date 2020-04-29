import React, { FC, useEffect, useState } from "react";

import TwoColumnPageLayout from "./TwoColumnPageLayout";
import Page from "./Page";
import Title from "./Title";
import PageContent from "./PageContent";
import SidebarItem from "./SidebarItem";
import SidebarItemContainer from "./SidebarItemContainer";
import Footer from "./Footer";
import styled from "@emotion/styled";
import { useAirTable } from "../hooks/useAirTable";
import { FooterResult } from "../types/airtable";
import ReactMarkdown from "react-markdown";
import Div100vh from "react-div-100vh";

const ThisPage = styled(Div100vh)`
  position: relative;
`;

const DonateAndContactSection: FC = () => {
  const [currentPage, setCurrentPage] = useState<"donate" | "contact">("donate");
  const { data, getAll } = useAirTable({ tableName: "Footer" });

  useEffect(() => {
    getAll(["Notes", "Name"]);
  }, []);

  const donateNotes = data && data.find((d: FooterResult) => d.fields.Name === "Donate").fields.Notes;
  const contactNotes = data && data.find((d: FooterResult) => d.fields.Name === "Contact").fields.Notes;

  return (
    <ThisPage>
      <TwoColumnPageLayout>
        <div>
          <Title condensed>Donate &amp; Contact</Title>
          <SidebarItemContainer>
            <SidebarItem active={currentPage === "donate"} onClick={() => setCurrentPage("donate")}>
              Donate
            </SidebarItem>
            <SidebarItem active={currentPage === "contact"} onClick={() => setCurrentPage("contact")}>
              Contact
            </SidebarItem>
          </SidebarItemContainer>
        </div>
        <div>
          <PageContent>
            {currentPage === "donate" && (
              <>
                <Title condensed>Donate</Title>
                <ReactMarkdown>{donateNotes}</ReactMarkdown>
              </>
            )}
            {currentPage === "contact" && (
              <>
                <Title condensed>Contact</Title>
                <ReactMarkdown>{contactNotes}</ReactMarkdown>
              </>
            )}
          </PageContent>
        </div>
      </TwoColumnPageLayout>
      <Footer />
    </ThisPage>
  );
};

export default DonateAndContactSection;
