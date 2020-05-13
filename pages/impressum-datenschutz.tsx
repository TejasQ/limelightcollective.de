import React, { useState, useEffect, FC } from "react";
import styled from "@emotion/styled";

import Page from "../components/Page";
import TwoColumnPageLayout from "../components/TwoColumnPageLayout";
import Title from "../components/Title";
import SidebarItemContainer from "../components/SidebarItemContainer";
import SidebarItem from "../components/SidebarItem";
import PageContent from "../components/PageContent";
import ReactMarkdown from "react-markdown";
import { FooterResult } from "../types/airtable";
import { getFromAirTable } from "../util/getFromAirTable";

const Container = styled(Page)`
  background: url("/images/bg-home-3.jpg");
  background-size: cover;
`;

const ImpressumPage: FC<any> = ({ footerData }) => {
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
              {footerData && footerData.find((d: FooterResult["fields"]) => d.Name === "Impressum/Datenschutz").Notes}
            </ReactMarkdown>
          </PageContent>
        </div>
      </TwoColumnPageLayout>
    </Container>
  );
};

export default ImpressumPage;

export const getStaticProps = async () => {
  const footerData = (
    await getFromAirTable("Footer")
      .select({ fields: ["Notes", "Name", "Team"] })
      .all()
  ).map((r) => r.fields);

  return { unstable_revalidate: true, props: { footerData } };
};
