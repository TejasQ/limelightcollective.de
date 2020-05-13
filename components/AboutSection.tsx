import React, { FC, useState } from "react";
import { Markdown } from "./Markdown";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";

import TwoColumnPageLayout from "./TwoColumnPageLayout";
import Title from "./Title";
import PageContent from "./PageContent";
import SidebarItem from "./SidebarItem";
import SidebarItemContainer from "./SidebarItemContainer";
import { FooterResult, TeamResult } from "../types/airtable";
import { trackEvent } from "../util/trackEvent";

const ThisPage = styled(Div100vh)``;

const TeamLayout = styled.div`
  display: grid;
  gap: 16px;
  height: 100%;
  overflow: auto;

  @media (min-width: 768px) {
    grid-template-columns: 150px auto;
  }
`;

const ProfilePic = styled.div<{ src: string }>(({ src }) => ({
  width: 150,
  height: 150,
  backgroundImage: `url('${src}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "50%",
}));

const AboutSection: FC<any> = ({ footerData, teamData }) => {
  const [currentPage, setCurrentPage] = useState<"concept" | "team">("concept");
  const notes = footerData && footerData.find((d: FooterResult["fields"]) => d.Name === "About").Notes;

  return (
    <ThisPage>
      <TwoColumnPageLayout>
        <div>
          <Title>About</Title>
          <SidebarItemContainer>
            <SidebarItem
              active={currentPage === "concept"}
              onClick={() => {
                setCurrentPage("concept");
                trackEvent({ category: "Home", action: "Click on Concept" });
              }}
            >
              Our Concept
            </SidebarItem>
            <SidebarItem
              active={currentPage === "team"}
              onClick={() => {
                setCurrentPage("team");
                trackEvent({ category: "Home", action: "Click on Team" });
              }}
            >
              Our Team
            </SidebarItem>
          </SidebarItemContainer>
        </div>
        <div style={{ overflow: "auto" }}>
          <PageContent>
            {currentPage === "concept" && (
              <>
                {" "}
                <Title condensed>Our Concept</Title>
                <Markdown>{notes}</Markdown>
              </>
            )}
            {currentPage === "team" && (
              <>
                <Title condensed>Our Team</Title>
                {teamData &&
                  teamData.map((t: TeamResult["fields"]) => (
                    <TeamLayout key={String(t.ID)}>
                      {t.Attachments ? <ProfilePic src={t.Attachments[0].url} /> : <div />}
                      <div>
                        <Markdown>{t.Name}</Markdown>
                        <Markdown>{t.Notes}</Markdown>
                      </div>
                    </TeamLayout>
                  ))}
              </>
            )}
          </PageContent>
        </div>
      </TwoColumnPageLayout>
    </ThisPage>
  );
};

export default AboutSection;
