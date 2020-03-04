import React, { FC, useState } from "react";

import TwoColumnPageLayout from "./TwoColumnPageLayout";
import Page from "./Page";
import Title from "./Title";
import PageContent from "./PageContent";
import SidebarItem from "./SidebarItem";
import SidebarItemContainer from "./SidebarItemContainer";
import styled from "@emotion/styled";

const ThisPage = styled(Page)`
  background-image: url("/images/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -1800px;
`;

const TeamLayout = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  gap: 16px;
`;

const AboutSection: FC = () => {
  const [currentPage, setCurrentPage] = useState<"concept" | "team">("concept");
  return (
    <ThisPage>
      <TwoColumnPageLayout>
        <div>
          <Title>About</Title>
          <SidebarItemContainer>
            <SidebarItem onClick={() => setCurrentPage("concept")}>Our Concept</SidebarItem>
            <SidebarItem onClick={() => setCurrentPage("team")}>Our Team</SidebarItem>
          </SidebarItemContainer>
        </div>
        <div>
          <PageContent>
            {currentPage === "concept" && (
              <>
                {" "}
                <Title condensed>Our Concept</Title>
                <p>
                  The Limelight Collective brings high quality performing arts together with Christian spirituality as a
                  way of enriching individual lives and the wider community.
                </p>
                <p>
                  We offer community performing arts programmes like our biweekly Open Stage, our Baby-song courses and
                  street performance in our neighborhood.
                </p>
                <p>
                  Soul Space, our weekly artistic meditation, provides opportunity for spiritual life developent through
                  artistic practices.
                </p>
                <p>
                  We also offer pastoral care and profeessional development opportuntiies for peforming artists. The
                  Limelight Collective is a project of The Salavation Army.
                </p>
              </>
            )}
            {currentPage === "team" && (
              <>
                {" "}
                <Title condensed>Our Team</Title>
                <TeamLayout>
                  <img alt="Shaw" src="https://lorempixel.com/50/50" />
                  <div>
                    <p>SHAW COLEMAN - ARTISTIC DIRECTOR</p>
                    <p>
                      Shaw Coleman graduated from the Australian National Theatre Ballet School in 2006, before dancing
                      soloist roles in various ballet copanies throughout Europe.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium quidem at architecto
                      harum aliquid laborum sapiente distinctio eligendi, ipsum, quos fugiat repellat, nobis nam quam
                      minima. Dolores, molestiae rem.
                    </p>
                  </div>
                </TeamLayout>
                <TeamLayout>
                  <img alt="Shaw" src="https://lorempixel.com/50/50" />
                  <div>
                    <p>KATHARINA COLEMAN - PROJECT CONSULTANT</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum accusamus impedit sint, doloribus vel
                      dolore iste soluta, dolorem, amet fugit quod perferendis! Recusandae cupiditate ea vero dolorum,
                      iusto numquam neque.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit praesentium nesciunt, quo
                      debitis veniam inventore quod error necessitatibus, labore aspernatur autem id quis eaque alias
                      fuga explicabo quam beatae.
                    </p>
                  </div>
                </TeamLayout>
              </>
            )}
          </PageContent>
        </div>
      </TwoColumnPageLayout>
    </ThisPage>
  );
};
export default AboutSection;
