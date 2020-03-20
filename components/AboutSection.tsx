import React, { FC, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import TwoColumnPageLayout from "./TwoColumnPageLayout";
import Page from "./Page";
import Title from "./Title";
import PageContent from "./PageContent";
import SidebarItem from "./SidebarItem";
import SidebarItemContainer from "./SidebarItemContainer";
import styled from "@emotion/styled";
import { useAirTable } from "../hooks/useAirTable";
import { FooterResult, TeamResult } from "../types/airtable";

const ThisPage = styled(Page)``;

const TeamLayout = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  gap: 16px;
  height: 100%;
  overflow: auto;
`;

const ProfilePic = styled.div<{ src: string }>(({ src }) => ({
  width: 150,
  height: 150,
  backgroundImage: `url('${src}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "50%",
}));

const AboutSection: FC = () => {
  const [currentPage, setCurrentPage] = useState<"concept" | "team">("concept");
  const { data, getAll } = useAirTable({ tableName: "Footer" });
  const { data: teamData, getAll: getTeamMembers } = useAirTable({ tableName: "Team" });

  useEffect(() => {
    getAll(["Notes", "Name", "Team"]);
    getTeamMembers(["ID", "Name", "Notes", "Attachments"]);
  }, []);

  const notes = data && data.find((d: FooterResult) => d.fields.Name === "About").fields.Notes;

  return (
    <ThisPage>
      <TwoColumnPageLayout>
        <div>
          <Title>About</Title>
          <SidebarItemContainer>
            <SidebarItem active={currentPage === "concept"} onClick={() => setCurrentPage("concept")}>
              Our Concept
            </SidebarItem>
            <SidebarItem active={currentPage === "team"} onClick={() => setCurrentPage("team")}>
              Our Team
            </SidebarItem>
          </SidebarItemContainer>
        </div>
        <div style={{ height: "100%", overflow: "auto" }}>
          <PageContent>
            {currentPage === "concept" && (
              <>
                {" "}
                <Title condensed>Our Concept</Title>
                <ReactMarkdown>{notes}</ReactMarkdown>
              </>
            )}
            {currentPage === "team" && (
              <>
                <Title condensed>Our Team</Title>
                {teamData &&
                  teamData.map((t: TeamResult) => (
                    <TeamLayout key={String(t.fields.ID)}>
                      {t.fields.Attachments ? <ProfilePic src={t.fields.Attachments[0].url} /> : <div />}
                      <div>
                        <p>{t.fields.Name}</p>
                        <ReactMarkdown>{t.fields.Notes}</ReactMarkdown>
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
