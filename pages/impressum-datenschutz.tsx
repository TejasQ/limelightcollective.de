import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Page from "../components/Page";
import TwoColumnPageLayout from "../components/TwoColumnPageLayout";
import Title from "../components/Title";
import SidebarItemContainer from "../components/SidebarItemContainer";
import SidebarItem from "../components/SidebarItem";
import PageContent from "../components/PageContent";
import ReactMarkdown from "react-markdown";
import { useAirTable } from "../hooks/useAirTable";
import { FooterResult } from "../types/airtable";

const Container = styled(Page)`
  background: url("/images/bg-home-3.jpg");
  background-size: cover;
`;

const ImpressumPage = () => {
  const { data, getAll } = useAirTable({ tableName: "Footer" });

  useEffect(() => {
    getAll(["Notes", "Name"]);
  }, []);

  return (
    <Container>
      <TwoColumnPageLayout>
        <div style={{ maxWidth: "100%" }}>
          <Title condensed>Impressum / Datenschutz</Title>
          <SidebarItemContainer>
            <SidebarItem active={false} onClick={() => window.history.back()}>
              Back
            </SidebarItem>
          </SidebarItemContainer>
        </div>
        <div>
          <PageContent>
            <ReactMarkdown>
              {data && data.find((d: FooterResult) => d.fields.Name === "Impressum/Datenschutz").fields.Notes}
            </ReactMarkdown>
          </PageContent>
        </div>
      </TwoColumnPageLayout>
    </Container>
  );
};
export default ImpressumPage;
