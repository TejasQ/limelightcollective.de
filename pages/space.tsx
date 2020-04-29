import React, { FC, useState } from "react";

import Page from "../components/Page";
import { SpaceTriangle } from "../components/SpaceTriangle";
import TwoColumnPageLayout from "../components/TwoColumnPageLayout";
import Title from "../components/Title";
import SidebarItemContainer from "../components/SidebarItemContainer";
import SidebarItem from "../components/SidebarItem";
import styled from "@emotion/styled";
import { getFromAirTable } from "../util/getFromAirTable";
import ReactMarkdown from "react-markdown";

const Container = styled(Page)`
  background: url("/images/space-bg.jpg");
  background-size: cover;
`;

const SpaceLayout = styled(TwoColumnPageLayout)`
  padding: 0;
  grid-template-columns: auto;
  grid-template-rows: max-content auto;
  place-items: center;
  place-content: center;

  @media (min-width: 1024px) {
    grid-template-rows: auto;
    padding: 100px 16px 0;
    grid-template-columns: 2fr 3fr;
    place-items: flex-start;
    place-content: flex-start;
  }
`;

const SpacePage: FC<{ sections: { Name: string; Content: string; Attachments: { url: string }[] }[] }> = ({
  sections,
}) => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <Container>
      <SpaceLayout>
        <div>
          <Title>Space</Title>
          <SidebarItemContainer>
            {sections.map((s, i) => (
              <SidebarItem onClick={() => setActiveSection(i)} key={s.Name} active={activeSection === i}>
                {s.Name}
              </SidebarItem>
            ))}
          </SidebarItemContainer>
        </div>
        <div style={{ position: "relative" }}>
          <SpaceTriangle shade content={sections[activeSection].Content} size={574}>
            <ReactMarkdown>{sections[activeSection].Content || ""}</ReactMarkdown>
          </SpaceTriangle>
          <SpaceTriangle
            content=""
            style={{ position: "absolute", top: -9, left: -23, background: "white", zIndex: 99 }}
            size={620}
          />

          {sections[activeSection].Attachments && (
            <AttachmentsContainer>
              {sections[activeSection].Attachments.map((a) => (
                <img alt={sections[activeSection].Name} src={a.url} />
              ))}
            </AttachmentsContainer>
          )}
        </div>
      </SpaceLayout>
    </Container>
  );
};

export const getStaticProps = async () => {
  const data = await getFromAirTable("Space")
    .select({ fields: ["Name", "Content", "Attachments", "Should Show"] })
    .all();
  return {
    unstable_revalidate: true,
    props: { sections: data.filter((b) => b.fields["Should Show"]).map((d) => d.fields) },
  };
};

const AttachmentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  img {
    max-width: 200px;
  }
`;

export default SpacePage;
