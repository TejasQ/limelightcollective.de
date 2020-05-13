import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import React, { FC, useState } from "react";
import { Markdown } from "../components/Markdown";
import Page from "../components/Page";
import SidebarItem from "../components/SidebarItem";
import SidebarItemContainer from "../components/SidebarItemContainer";
import { SpaceTriangle } from "../components/SpaceTriangle";
import Title from "../components/Title";
import TwoColumnPageLayout from "../components/TwoColumnPageLayout";
import { getFromAirTable } from "../util/getFromAirTable";
import { trackEvent } from "../util/trackEvent";

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
  }
`;

const SpacePage: FC<{ sections: { Name: string; Content: string; Attachments: { url: string }[] }[] }> = ({
  sections,
}) => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <Container>
      <Global
        styles={css`
          html,
          body {
            overflow: hidden;
          }
        `}
      />
      <SpaceLayout>
        <div style={{ position: "relative", padding: "0 8px" }}>
          <Title>Space</Title>
          <SpaceSidebar>
            {sections.map((s, i) => (
              <SidebarItem
                onClick={() => {
                  setActiveSection(i);
                  trackEvent({
                    category: "Space",
                    action: "Go to Section",
                    label: s.Name,
                  });
                }}
                key={s.Name}
                active={activeSection === i}
              >
                {s.Name}
              </SidebarItem>
            ))}
          </SpaceSidebar>
        </div>
        <div style={{ position: "relative" }}>
          <SpaceTriangle
            shade
            content={
              <>
                <Markdown>{sections[activeSection].Content}</Markdown>
                {sections[activeSection].Attachments && (
                  <AttachmentsContainer>
                    {sections[activeSection].Attachments.map((a) => (
                      <img
                        onClick={() => {
                          window.open(a.url, "_blank");
                          trackEvent({
                            category: "Space",
                            action: "Open Image",
                            label: a.url,
                          });
                        }}
                        alt={sections[activeSection].Name}
                        src={a.url}
                      />
                    ))}
                  </AttachmentsContainer>
                )}
              </>
            }
            size={{ desktop: 574, mobile: 180 }}
          ></SpaceTriangle>
          <SpaceTriangle
            content=""
            css={css`
              position: absolute;
              top: 3px;
              left: 0;
              background: white;
              z-index: 99;
              transform: scale(1.05);

              @media (min-width: 768px) {
                height: 590px;
                width: 574px;
              }
            `}
            size={{ desktop: 620, mobile: 180 }}
          />
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

const SpaceSidebar = styled(SidebarItemContainer)`
  grid-template-columns: 1fr 1fr;
  padding: 0;

  @media (min-width: 1024px) {
    grid-template-columns: auto;
    transform: skew(25deg, 0deg);
    position: absolute;
    right: -208px;
    z-index: 300;
  }
`;

const AttachmentsContainer = styled.div`
  width: calc(100% + 32vw);
  display: flex;
  flex-wrap: wrap;
  display: grid;
  gap: 8px;
  margin: -8px -16vw;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: calc(100% + 78px);
    margin: 0 -39px;
  }

  img {
    width: 100%;
  }
`;

export default SpacePage;
